import { useCartItems, useTotalPrice, useCartActions } from "../../state/useCartStore";
import { Button } from "react-daisyui";

const Cart = () => {
	const items = useCartItems();
	const totalPrice = useTotalPrice();
	const { addItem, removeItem } = useCartActions();

	return (
		<>
			{items.length === 0 ? (
				<p className="text-center">Your cart is empty</p>
			) : (
				<>
					<table className="table w-full mb-4">
						<thead>
							<tr>
								<th>Product</th>
								<th>Quantity</th>
								<th>Price</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{items.map((item) => (
								<tr key={item.id}>
									<td>{item.title}</td>
									<td>
										<Button size="xs" color="primary" onClick={() => removeItem(item.id, 1)}>
											-
										</Button>
										<span className="mx-2">{item.quantity}</span>
										<Button size="xs" color="primary" onClick={() => addItem(item, 1)}>
											+
										</Button>
									</td>
									<td>${item.price.toFixed(2)}</td>
									<td>
										<Button size="sm" color="error" onClick={() => removeItem(item.id, item.quantity)}>
											Remove
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<div className="font-bold">Total: KR{totalPrice.toFixed(2)}</div>
				</>
			)}
		</>
	);
};

export default Cart;
