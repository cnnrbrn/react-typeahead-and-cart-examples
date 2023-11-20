import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const state = () => ({
	items: [],
	totalItems: 0,
});

const actions = (set) => ({
	addItem: (item, quantity = 1) =>
		set((state) => {
			const existingItemIndex = state.items.findIndex((i) => i.id === item.id);
			let newItems = [...state.items];

			if (existingItemIndex >= 0) {
				newItems[existingItemIndex].quantity += quantity;
			} else {
				newItems = [...newItems, { ...item, quantity }];
			}

			const newTotalItems = newItems.reduce((total, item) => total + item.quantity, 0);

			return {
				items: newItems,
				totalItems: newTotalItems,
			};
		}),

	removeItem: (itemId, quantity = 1) =>
		set((state) => {
			const updatedItems = state.items.map((item) => {
				if (item.id === itemId) {
					return { ...item, quantity: item.quantity - quantity };
				}
				return item;
			});

			const newItems = updatedItems.filter((item) => item.quantity > 0);

			const newTotalItems = newItems.reduce((total, item) => total + item.quantity, 0);

			return {
				items: newItems,
				totalItems: newTotalItems,
			};
		}),

	clearCart: () => set({ items: [], totalItems: 0 }),
});

const useCartStore = create(
	devtools(
		persist(
			(set) => ({
				...state(),
				...actions(set),
			}),
			{
				name: "cart",
			}
		)
	)
);

export const useCartItems = () => {
	const items = useCartStore((state) => state.items);
	return items;
};

export const useTotalPrice = () => {
	const totalPrice = useCartStore((state) =>
		state.items.reduce((total, item) => {
			return total + item.price * item.quantity;
		}, 0)
	);
	return totalPrice;
};

export const useTotalItems = () => {
	const total = useCartStore((state) => state.totalItems);
	return total;
};

export const useCartActions = () => {
	return useCartStore((state) => ({
		addItem: state.addItem,
		removeItem: state.removeItem,
		clearCart: state.clearCart,
	}));
};
