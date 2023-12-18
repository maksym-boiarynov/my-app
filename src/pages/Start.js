import React, { Component } from 'react';
import '../styles/start.css';

class Start extends Component {
  render () {
    return (
		<>
			  <link rel="stylesheet" href="index.css" />
			  <title>Start site</title>
				<section>
					<div className="form-box">
						<div className="form-value">
							<form action="">
								<div className="loading-container">
								<h2>Loading game to start 
									<div className="loading-dots">
									<div className="dot"></div>
                       				<div className="dot"></div>
                        			<div className="dot"></div>
									</div></h2>
								</div>
							</form>
						</div>
					</div>
				</section>
		</>
	)
	}
	
}

export default Start;