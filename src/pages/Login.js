import React, { Component } from 'react';
import '../styles/start.css';
import lock from '../pictures/lock.png'
import AdminHelper from "../helpers/AdminHelper";
import { Navigate } from 'react-router';

class Login extends Component {
	constructor(props)
	{
		super(props);
		this.state = {password: "",
					navTag: (<></>)};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.login = this.login.bind(this);
		this.tryNavigate = this.tryNavigate.bind(this);

	}
	componentDidMount()
	{
		this.tryNavigate();
	}
	login = async (event) =>
	{
		event.preventDefault();
		let password = this.state.password;
		console.log( await AdminHelper.Login(password));
		this.tryNavigate();
	}
	handleInputChange(event)
	{
		this.setState({password: event.target.value});
	}
	tryNavigate()
	{
		if (AdminHelper.isLoggedIn())
		{
			console.log("redirecting...");
			this.setState({navTag: (<Navigate replace to="/odmen" />)});
		}
	}
  render () {
    return (
		<>
				<section>
					<div className="form-box">
						<div className="form-value">
							<form onSubmit={this.login} action="">
								<h2>Login</h2>
								<div className="inputbox">
									<img src={lock} id="Lock" />
									{this.state.navTag}
									<input onChange={this.handleInputChange} value={this.state.password} className="passwordInput" type="text" required />
									<label htmlFor="passwordInput">Your code</label>
								</div>
								<button>Log in</button>
							</form>
						</div>
					</div>
				</section>
		</>
	)
	}
	
}

export default Login;