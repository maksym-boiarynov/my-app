import React, { Component } from 'react';
import '../styles/login.css';
import lock from '../pictures/lock.png'

class Login extends Component {
  render () {
    return (
		<>
				<section>
					<div className="form-box">
						<div className="form-value">
							<form action="">
								<h2>Login</h2>
								<div className="inputbox">
									<img src={lock} id="Lock" />
									
									<input className="passwordInput" type="text" required />
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