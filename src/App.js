import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';


/**
 *
 * Renders App
 *
 * Props:
 *  - none
 *
 * State:
 * - none
 *
 * App -> { Navigation, RoutesList }
 *
 */
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navigation />
				<RoutesList />
			</BrowserRouter>
		</div>
	);
}

export default App;
