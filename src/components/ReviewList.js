import React from 'react';
import ReviewItem from './ReviewItem';
import PropTypes from 'prop-types';

const ReviewList = ({ review, handleDelete }) => {
	if (!review || review.length === 0) {
		return <>No reviews yet</>;
	}

	return (
		<div>
			{review.map((reviewItem) => {
				return (
					<ReviewItem
						key={reviewItem.id}
						data={reviewItem}
						handleDelete={handleDelete}
					/>
				);
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
