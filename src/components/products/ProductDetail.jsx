import { useParams } from "react-router-dom";

function ProductDetail() {
	let { id } = useParams();

	return <p>Id: {id}</p>;
}

export default ProductDetail;
