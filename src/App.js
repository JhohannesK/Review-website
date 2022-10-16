import Header from './components/Header';
import ReviewList from './components/ReviewList';
import ReviewData from './components/data/ReviewData';
import { useState } from 'react';

function App() {
	const [review, SetReview] = useState(ReviewData);

	const deleteReview = (id) => {
		if (window.confirm('Are you sure you want to delete this?')) {
			SetReview(review.filter((data) => data.id !== id));
		}
	};

	// TODO: Able to add new reviews

	return (
		<div>
			<Header text="Jhohannes' Review-app" />
			<ReviewList review={review} handleDelete={deleteReview} />
		</div>
	);
}

export default App;
