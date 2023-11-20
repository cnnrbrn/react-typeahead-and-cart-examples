import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NotFound from "./components/layout/NotFound";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="product/:id" element={<ProductPage />} />
				<Route path="cart" element={<CartPage />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
