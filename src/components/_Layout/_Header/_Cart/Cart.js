import "../../../../../styles/Cart.css";
import React from "react";

const Cart = () => {
	const quantity = 5;

	return (
		<div className="cartIcon">
			<h3>Cart: {quantity} Items</h3>
		</div>
	);
};

export default Cart;
