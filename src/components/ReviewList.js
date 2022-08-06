import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = ({ review }) => {
	return (
		<div>
			{review.map((reviewItem) => {
				return <ReviewItem key={reviewItem.id} data={reviewItem} />;
			})}
		</div>
	);
};

export default ReviewList;
