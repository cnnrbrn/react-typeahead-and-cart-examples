import React, { useState } from "react";
import { Input } from "react-daisyui";
import { Link } from "react-router-dom";

function ProductFilter({ products }) {
	const [searchTerm, setSearchTerm] = useState("");
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
		setIsDropdownOpen(event.target.value !== "");
	};

	const handleSelect = () => {
		setIsDropdownOpen(false);
	};

	return (
		<div className="relative p-4 w-full max-w-xs mx-auto">
			<Input placeholder="Search by title" value={searchTerm} onChange={handleChange} className="w-full" />
			{isDropdownOpen && filteredProducts.length > 0 ? (
				<ul className="absolute z-30 text-white bg-slate-600 w-full left-0 right-0">
					{filteredProducts.splice(0, 5).map((product) => (
						<li key={product.id} className="border-b-2 border-slate-800 hover:bg-slate-500">
							<Link to={`/product/${product.id}`} className="block p-4">
								{product.title}
							</Link>
						</li>
					))}
				</ul>
			) : (
				<ul className="absolute z-30 w-full left-0 right-0">
					{filteredProducts.length === 0 && searchTerm !== "" ? (
						<li className="border-b-2 border-slate-800 bg-slate-900 p-4">No products found</li>
					) : (
						""
					)}
				</ul>
			)}
		</div>
	);
}

export default ProductFilter;
