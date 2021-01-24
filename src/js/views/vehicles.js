import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicles = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card">
			<img className="card-img-top" src="https://picsum.photos/180/100?random=5" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{store.vehicles[props.match.params.theid].name}</h5>
				<p className="card-text">
					<span>Cargo Capacity: {store.vehicles[props.match.params.theid].cargo_capacity}</span> <br />
					<span>Crew: {store.vehicles[props.match.params.theid].crew}</span> <br />
					<span>Passengers: {store.vehicles[props.match.params.theid].passengers}</span> <br />
					<span>Manufacturer: {store.vehicles[props.match.params.theid].manufacturer}</span> <br />
					<span>Consumables: {store.vehicles[props.match.params.theid].consumables}</span> <br />
					<span>Cost in Credits: {store.vehicles[props.match.params.theid].cost_in_credits}</span>
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

Vehicles.propTypes = {
	match: PropTypes.object
};
