import React from 'react';
import './review.css';
import Card from './shared/Card';

const ReviewItem = ({ data }) => {
	return (
		<div className='review'>
			<Card>
				<div className='numDisplay'> {data.rating} </div>
				<div className='textDisplay'>{data.text}</div>
			</Card>
		</div>
	);
};

export default ReviewItem;
