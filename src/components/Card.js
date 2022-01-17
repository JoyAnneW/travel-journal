import React from "react";

export default function Card(props) {
	console.log(props.imageUrl);
	return (
		<main className="card">
			<img src={props.imageUrl} alt={props.title} className="card--img" />
			<div className="card__details">
				<i class="fas fa-map-marker-alt"></i>
				<span className="card__details--country">{props.location}</span>
				<a href={props.googleMapsUrl} className="card__details--map">
					View on Google Maps
				</a>
				<h1 className="card__details--title">{props.title}</h1>
				<span className="card__details--dates">
					{props.startDate} - {props.endDate}
				</span>

				<p className="card__details--text">{props.description}</p>
			</div>
		</main>
	);
}
