import './Reviews.css';
import arrowLeft from '../../images/left-arrow.svg';
import arrowRight from '../../images/right-arrow.svg';
import reviewImg1 from '../../images/review-img1.png';
import reviewImg2 from '../../images/review-img2.png';
import reviewImg3 from '../../images/review-img3.png';
import flag1 from '../../images/flag1.png';
import flag2 from '../../images/flag2.png';
import ReviewCard from './ReviewCard';

const Reviews = () => {
	return (
		<div className="container container-review">
			<div className="container-heading">
				<h2>Reviews</h2>
				<div className="container-heading-right">
					<p>
						1<span>/12</span>
					</p>
					<img src={arrowLeft} alt="" />
					<img src={arrowRight} alt="" />
				</div>
			</div>
			<div className="container-review-card">
				<ReviewCard
					image={reviewImg1}
					name="Hellen Jummy"
					flag={flag1}
				/>
				<ReviewCard
					image={reviewImg2}
					name="Isaac Oluwatemilorun"
					flag={flag2}
				/>
				<ReviewCard
					image={reviewImg3}
					name="Hellen Jummy"
					flag={flag1}
				/>
			</div>
		</div>
	);
};

export default Reviews;
