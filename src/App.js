import React from 'react';
import Earth from './pages/Earth';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
		<Router>
			<Routes>
				<Route exact path="/" Component={Earth} />
				<Route path="/Login" Component={Login} />
				
			</Routes>
		</Router>
    </div>
  );
}

export default App;