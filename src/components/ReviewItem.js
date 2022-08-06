import React, { useState } from 'react';
import './review.css';

const ReviewItem = () => {
	const [rating, setRating] = useState(9);
	const [text, setText] = useState(
		'This is how the review is gonna look like'
	);

	return (
		<div className='review'>
			<div className='card'>
				<div className='numDisplay'> {rating} </div>
				<div className='textDisplay'>{text}</div>
			</div>
		</div>
	);
};

export default ReviewItem;
