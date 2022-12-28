import React from "react";
import Product from "./Products__Product";
import data from "../../../data/dummyProducts";

const Products = () => {
	return (
		<div>
			<ul className="products-container">
				{data.map((product, index) => (
					<li key={index}>
						<Product
							id={product.id}
							name={product.name}
							imgURL={product.imgURL}
							price={product.price}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Products;
