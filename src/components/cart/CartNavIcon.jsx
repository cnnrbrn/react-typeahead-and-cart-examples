import { useTotalItems } from "../../state/useCartStore";
import CartIcon from "./CartIcon";

function CartNavIcon() {
	const totalItems = useTotalItems();

	return (
		<div class="flex justify-center items-center">
			<div class="relative">
				{totalItems > 0 ? (
					<div class="-top-4 absolute left-3">
						<p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{totalItems}</p>
					</div>
				) : null}
				<CartIcon />
			</div>
		</div>
	);
}

export default CartNavIcon;
