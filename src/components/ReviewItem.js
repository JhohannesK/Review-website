import React, { useState } from 'react';
import './review.css';

const ReviewItem = ({ data }) => {
	return (
		<div className='review'>
			<div className='card'>
				<div className='numDisplay'> {data.rating} </div>
				<div className='textDisplay'>{data.text}</div>
			</div>
		</div>
	);
};

export default ReviewItem;
