import React, { Component } from 'react';

class Countries extends Component {
    render() {
    return (
		<div className='container'>
			  <link rel="stylesheet" href="countries.css" />
			  <title>Country section</title>
				<section>
					<div className="container">
                        <div className='card'>
                            <div className='front'>
                            <div className='back'>
                                <h2>Back of card</h2>
                                <p>Additional info for country</p>                            
                            </div>
                            </div>
                        </div>
					</div>
				</section>
		</div>
	)
	}
}
export default Countries;