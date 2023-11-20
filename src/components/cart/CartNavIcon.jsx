import { useTotalItems } from "../../state/useCartStore";
import CartIcon from "./CartIcon";

function CartNavIcon() {
	const totalItems = useTotalItems();

	return (
		<div className="flex justify-center items-center">
			<div className="relative">
				{totalItems > 0 ? (
					<div className="-top-4 absolute left-3">
						<p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{totalItems}</p>
					</div>
				) : null}
				<CartIcon />
			</div>
		</div>
	);
}

export default CartNavIcon;
