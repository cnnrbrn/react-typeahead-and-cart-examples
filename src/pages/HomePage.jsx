import ProductList from "../components/products/ProductList";
import { useFetch } from "../hooks/useFetch";
import ProductFilter from "../components/products/ProductFilter";
import LoadingIndicator from "../components/layout/LoadingIndicator";
import { BASE_URL } from "../constants/api";

export default function HomePage() {
	const { data: products, isLoading, error } = useFetch(BASE_URL);

	if (isLoading) {
		return <LoadingIndicator />;
	}

	if (error) {
		return (
			<Alert>
				<span>{error}</span>
			</Alert>
		);
	}

	return (
		<>
			<ProductFilter products={products} />
			<ProductList products={products} />
		</>
	);
}
