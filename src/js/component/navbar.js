import React from "react";
import { Link } from "react-router-dom";
import StarWars from "../../img/StarWars.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-5">
			<div className="container">
				<Link to="/">
					<img src={StarWars} width="100" height="50" alt="Logo" />
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary dropdown-toggle">Favorites</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
