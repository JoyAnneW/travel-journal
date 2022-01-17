import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
	const cardComponent = data.map((trip) => {
		return <Card key={trip.title} {...trip} />;
	});

	return (
		<div className="App">
			<Navbar />
			<main>{cardComponent}</main>
		</div>
	);
}

export default App;
