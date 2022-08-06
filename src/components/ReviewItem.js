import React from 'react';
import './review.css';
import Card from './shared/Card';
import PropTypes from 'prop-types';

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

ReviewItem.propTypes = {
	data: PropTypes.object.isRequired,
};

export default ReviewItem;
