import React from 'react';
import Earth from './pages/Earth';
import Start from './pages/Start';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
		<Router>
			<Routes>
				<Route exact path="/" Component={Earth} />
				<Route path="/Start" Component={Start} />
				<Route path="/Login" Component={Login} />
				
			</Routes>
		</Router>
    </div>
  );
}

export default App;