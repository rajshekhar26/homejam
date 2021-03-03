import './ShowsCards.css';
import union from '../../images/union.png';
import rightArrow from '../../images/right-arrow-blue.svg';

const ShowsCards = (props) => {
	return (
		<div className="shows-card">
			<img className="artist-image" src={props.image} alt="" />
			<p>
				<span>{props.genre}</span>
			</p>
			<h3>{props.singerName}</h3>
			<div className="card-end">
				<a href="https://example.com">
					More info{' '}
					<img className="icon right-arrow" src={rightArrow} alt="" />
				</a>
				<img className="icon union" src={union} alt="" />
			</div>
		</div>
	);
};

export default ShowsCards;
