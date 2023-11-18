import { Card } from "react-daisyui";
import PropTypes from "prop-types";

function ProductItem({ title, imageUrl, description }) {
	return (
		<Card imageFull className="flex-auto">
			<Card.Image src={imageUrl} alt={title} />
			<Card.Body>
				<Card.Title tag="h2" className="text-white">
					{title}
				</Card.Title>
				<p className="text-white">{description}</p>
			</Card.Body>
		</Card>
	);
}

export default ProductItem;

ProductItem.propTypes = {
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};
