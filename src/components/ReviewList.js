import React from 'react';
import ReviewItem from './ReviewItem';
import PropTypes from 'prop-types';

const ReviewList = ({ review }) => {
	return (
		<div>
			{review.map((reviewItem) => {
				return <ReviewItem key={reviewItem.id} data={reviewItem} />;
			})}
		</div>
	);
};

ReviewList.propTypes = {
	review: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			rating: PropTypes.number,
			text: PropTypes.string,
		})
	),
};

export default ReviewList;
