import { useEffect } from 'react';
import './App.css';
import { getMovieList, searchMovie } from './api';

const App = () => {
	useEffect(() => {
		getMovieList()
	}, [])
	const search = (q) => {
		console.log({ q })
	}
	return (
		<div className="App">
		<header className="App-header">
			<h1>FRENDY MOVIES</h1>
			<input placeholder="Search films..." className="Movie-search" onChange={({ target }) => search(target.value)} />
			<div className="Movie-container">
			<div className="Movie-wrapper">
				<div className="Movie-title">EXAMPLE 1</div>
				<img className="Movie-image" src="" alt="" />
				<div className="Movie-date">05-06-2023</div>
				<div className="Movie-rate">9.0</div>
			</div>
			</div>
		</header>
		</div>
	);
}

export default App;
