import React from 'react';
import Earth from './pages/Earth';
import Start from './pages/Start';
import Login from './pages/Login';
import Countries from './pages/Countries';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
		<Router>
			<Routes>
				<Route index element = {<Start />} />
	  			<Route path="/start" Component={Start} />
				<Route path="/login" Component={Login} />
				<Route path="/countries" Component={Countries} />
				<Route path="/earth" Component={Earth} />
			</Routes>
		</Router>
    </div>
  );
}

export default App;
