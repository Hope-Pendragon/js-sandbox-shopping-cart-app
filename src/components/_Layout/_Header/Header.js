// import "../../../styles/Header.css";
import React from "react";
import Cart from "./_Cart/Cart";

const Header = () => {
	return (
		<header>
			<nav className="header-nav">
				<ul className="header-ul">
					<li>
						<h2 className="header-h2">Redux Shopping App</h2>
					</li>
					<li>
						<Cart />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
