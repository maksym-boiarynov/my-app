import React, { Component } from 'react';
import CodesHelper from '../helpers/CodesHelper';

class Start extends Component {
	render() {
		//localStorage.setItem("codeExpDate", new Date());
		console.log(localStorage.getItem("code"));
		//console.log(localStorage.getItem("codeExpDate"));
		let code;
		CodesHelper.GetCode()
		//alert("piu piu pou pou" + code);
    return (
		<div className='start-container'>
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
		</div>
	)
	}
	
}

export default Start;