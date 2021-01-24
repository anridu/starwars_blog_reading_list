import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { HomePeople } from "./home-people";

import { Context } from "../store/appContext";

const HomePlanets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card-columns">
			{store.planets.map((item, index) => {
				return (
					<div className="card" key={index}>
						<img
							className="card-img-top"
							src="https://picsum.photos/200/100?random=2"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">
								<Link to={`/planets/${index}`}>{item.name}</Link>
							</h5>
							<p className="card-text">
								<span>Population: {item.population}</span> <br />
								<span>Terrain: {item.terrain}</span> <br />
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default HomePlanets;
