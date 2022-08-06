import Header from './components/Header';
import ReviewList from './components/ReviewList';
import ReviewData from './components/data/ReviewData';
import { useState } from 'react';

function App() {
	const [review, SetReview] = useState(ReviewData);
	return (
		<div>
			<Header text='Review-app' />
			<ReviewList review={review} />
		</div>
	);
}

export default App;
