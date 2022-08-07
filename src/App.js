import Header from './components/Header';
import ReviewList from './components/ReviewList';
import ReviewData from './components/data/ReviewData';
import { useState } from 'react';
import { FaWindows } from 'react-icons/fa';

function App() {
	const [review, SetReview] = useState(ReviewData);

	const deleteReview = (id) => {
		if (window.confirm('Are you sure you want to delete this?')) {
			SetReview(review.filter((data) => data.id !== id));
		}
	};

	return (
		<div>
			<Header text='Review-app' />
			<ReviewList review={review} handleDelete={deleteReview} />
		</div>
	);
}

export default App;
