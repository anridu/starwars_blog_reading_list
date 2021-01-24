import React from "react";
//import { Link } from "react-router-dom";

import HomePeople from "./home-people";
import HomePlanets from "./home-planets";
import HomeVehicles from "./home-vehicles";

export const Home = () => {
	return (
		<div className="container">
			<h2 className="text-center">PEOPLE</h2>
			<HomePeople />

			<div className="mt-5 mb-5" />
			<h2 className="text-center">PLANETS</h2>

			<HomePlanets />
			<div className="container-fluid">
				<div className="row flex-row flex-nowrap">
					<div className="mt-8 mb-8" />
					<h2 className="text-center">VEHICLES</h2>

					<HomeVehicles />
				</div>
			</div>
		</div>
	);
};
