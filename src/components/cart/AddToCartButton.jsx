import PropTypes from "prop-types";
import { Button } from "react-daisyui";
import CartIcon from "./CartIcon";
import { useCartActions } from "../../state/useCartStore";

function AddToCartButton({ product }) {
	const { addItem } = useCartActions();

	const handleAddToCart = () => {
		addItem(product, 1);
	};

	return (
		<Button onClick={handleAddToCart} className="absolute bottom-5 right-5 z-30">
			<CartIcon />
		</Button>
	);
}

export default AddToCartButton;

AddToCartButton.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		imageUrl: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
	}).isRequired,
};
