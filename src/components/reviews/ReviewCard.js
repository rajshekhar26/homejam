import './ReviewCard.css';

const ReviewCard = (props) => {
	return (
		<div className="review-card">
			<div className="container-about">
				<img className="user-picture" src={props.image} alt="" />
				<div className="container-name">
					<h4>{props.name}</h4>
					<div className="container-addr">
						<img src={props.flag} alt="flags" />
						<span>Palo Alto, CA</span>
					</div>
				</div>
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
				in donec in nisi vitae. Vestibulum pellentesque eget laoreet
				adipiscing.
			</p>
		</div>
	);
};

export default ReviewCard;
