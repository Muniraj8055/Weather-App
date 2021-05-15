import './App.css';
import Forecast from './Components/Forecast/Forecast';
import Logo from './Components/Logo/Logo';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Logo />
				<h1>CHECK WEATHER</h1>
			</header>
			<main>
				<Forecast />
			</main>
			<footer>Page created by Muniraj</footer>
		</div>
	);
}

export default App;
