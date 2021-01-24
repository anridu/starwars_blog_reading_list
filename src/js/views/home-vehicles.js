import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { HomePeople } from "./home-people";
import { HomePlanets } from "./home-planets";

import { Context } from "../store/appContext";

const HomeVehicles = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card-deck">
			{store.vehicles.map((item, index) => {
				return (
					<div className="card" key={index}>
						<img
							className="card-img-top"
							src="https://picsum.photos/200/100?random=7"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">
								<Link to={`/vehicles/${index}`}>{item.name}</Link>
							</h5>
							<p className="card-text">
								<span>Cargo Capacity: {item.cargo_capacity}</span> <br />
								<span>Crew: {item.crew}</span> <br />
								<span>Passengers: {item.passengers}</span> <br />
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default HomeVehicles;
