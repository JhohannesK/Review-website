import React from 'react';
import './review.css';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const ReviewItem = ({ data, handleDelete }) => {
	return (
		<div className='review'>
			<Card>
				<div className='numDisplay'> {data.rating} </div>
				<button className='close' onClick={() => handleDelete(data.id)}>
					<FaTimes color='#f35b04' />
				</button>
				<div className='textDisplay'>{data.text}</div>
			</Card>
		</div>
	);
};

ReviewItem.propTypes = {
	data: PropTypes.object.isRequired,
};

export default ReviewItem;
