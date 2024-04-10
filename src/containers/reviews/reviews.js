import React from 'react';
import './review.css';
import { reviews } from '../../mock/reviews';

const Reviews = () => {
	return (
		<div className='review-wrapper' id='reviews'>
			<div className='review-title'>Reviews</div>
			<div className='reviews-conent'>
				{reviews?.map((eachReview) => (
					<div className='review' key={eachReview.user}>
						<img
							src={require(eachReview.gender === 'm'
								? '../../assets/images/user.jpg'
								: '../../assets/images/user-f.jpg')}
							alt='user'
							className='review-user-icon'
						/>
						<div className='review-text'>
							<div className='user-name'>{eachReview.user}</div>
							<div className='review-desc'>❝ {eachReview.review} ❞</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Reviews;
