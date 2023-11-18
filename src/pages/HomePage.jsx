import { Loading, Input } from "react-daisyui";
import ProductList from "../components/products/ProductList";
import { useFetch } from "../hooks/useFetch";
import { BASE_URL } from "../constants/api";

export default function HomePage() {
	const { data: products, isLoading, error } = useFetch(BASE_URL);

	if (isLoading) {
		return <Loading />;
	}

	if (error) {
		return (
			<Alert>
				<span>{error}</span>
			</Alert>
		);
	}

	return (
		<div className="container mx-auto">
			<div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
				<Input className="w-full max-w-xs" />
			</div>
			<ProductList products={products} />
		</div>
	);
}
