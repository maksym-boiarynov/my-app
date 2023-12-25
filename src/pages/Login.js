import React, { Component } from 'react';
import lock from '../pictures/lock_2.png'

class Login extends Component {
  render () {
    return (
		<div className='login-container'>
				<section>
					<div className="form-box">
						<div className="form-value">
							<form action="">
								<h2>Login</h2>
								<div className="inputbox">
									<img src={lock} id="Lock" />
									
									<input className="passwordInput" type="password" required />
									<label htmlFor="passwordInput">Your code</label>
								</div>
								<button>Log in</button>
							</form>
						</div>
					</div>
				</section>
		</div>
	)
	}
	
}

export default Login;