import React, { Component } from 'react';
import '../styles/login.css';

class Login extends Component {
  render () {
    return (
		<>
			<html lang="en">
			<head>
			  <link rel="stylesheet" href="index.css" />
			  <title>Login site</title>
			</head>
			<body>
				<section>
					<div class="form-box">
						<div class="form-value">
							<form action="">
								<h2>Login</h2>
								<div class="inputbox">
									<ion-icon name="lock-closed-outline"></ion-icon>
									<input type="text" required />
									<label for="">Your code</label>
								</div>
								<button>Log in</button>
							</form>
						</div>
					</div>
				</section>
				<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
				<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
			</body>
			</html>
		</>
	)
	}
	
}

export default Login;