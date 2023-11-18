import ProductItem from "./ProductItem";
import PropTypes from "prop-types";

function ProductList({ products = [] }) {
	return (
		<div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
			{products.map((product) => {
				const { id, title, imageUrl, description } = product;
				return (
					<div key={id} className="flex flex-col">
						<ProductItem title={title} imageUrl={imageUrl} description={description} />
					</div>
				);
			})}
		</div>
	);
}

ProductList.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			imageUrl: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
		})
	),
};

export default ProductList;
