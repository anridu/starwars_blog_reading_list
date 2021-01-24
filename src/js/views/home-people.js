import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const HomePeople = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card-columns">
			{store.people.map((item, index) => {
				return (
					<div className="card" key={index}>
						<img
							className="card-img-top"
							src="http://www.facetheforce.today/random/180?r=1"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">
								<Link to={`/people/${index}`}>{item.name}</Link>
							</h5>
							<p className="card-text">
								<span>Gender: {item.gender}</span> <br />
								<span>Hair color: {item.skin_color}</span> <br />
								<span>Eye Color: {item.eye_color}</span>
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default HomePeople;
