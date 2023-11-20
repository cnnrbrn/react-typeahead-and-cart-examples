import { Card } from "react-daisyui";
import PropTypes from "prop-types";
import AddToCartButton from "../cart/AddToCartButton";

function ProductItem({ product }) {
	const { imageUrl, title, description, price } = product;

	return (
		<Card imageFull className="flex-auto relative">
			<AddToCartButton product={product} />
			<Card.Image src={imageUrl} alt={title} />
			<Card.Body>
				<Card.Title tag="h2" className="text-white">
					{title}
				</Card.Title>
				<p className="text-white">{description}</p>
				<p className="text-white">{price}</p>
			</Card.Body>
		</Card>
	);
}

export default ProductItem;

ProductItem.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		imageUrl: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
	}).isRequired,
};
