import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card">
			<img className="card-img-top" src="http://www.facetheforce.today/random/180?r=1" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{store.people[props.match.params.theid].name}</h5>
				<p className="card-text">
					<span>Birth Year: {store.people[props.match.params.theid].birth_year}</span> <br />
					<span>Gender: {store.people[props.match.params.theid].gender}</span> <br />
					<span>Height: {store.people[props.match.params.theid].height}</span> <br />
					<span>Mass: {store.people[props.match.params.theid].mass}</span> <br />
					<span>Skin: {store.people[props.match.params.theid].skin_color}</span> <br />
					<span>Eye Color: {store.people[props.match.params.theid].eye_color}</span>
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

People.propTypes = {
	match: PropTypes.object
};
