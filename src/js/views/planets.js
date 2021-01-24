import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card">
			<img className="card-img-top" src="https://picsum.photos/180/100?random=5" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{store.planets[props.match.params.theid].name}</h5>
				<p className="card-text">
					<span>Climate: {store.planets[props.match.params.theid].climate}</span> <br />
					<span>Terrain: {store.planets[props.match.params.theid].terrain}</span> <br />
					<span>Diameter: {store.planets[props.match.params.theid].diameter}</span> <br />
					<span>Gravity: {store.planets[props.match.params.theid].gravity}</span> <br />
					<span>Orbital Period: {store.planets[props.match.params.theid].orbital_period}</span>
				</p>
			</div>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Planets.propTypes = {
	match: PropTypes.object
};
