import './UpcomingShows.css';
import ShowsCards from './ShowsCards';
import artist1 from '../../images/artist1.png';
import artist2 from '../../images/artist2.png';
import artist3 from '../../images/artist3.png';
import artist4 from '../../images/artist4.png';

const UpcomingShows = () => {
	return (
		<div className="container container-shows">
			<div className="container-heading">
				<h2>Upcoming Shows</h2>
				<a href="https://example.com">View All</a>
			</div>
			<div className="container-shows-card">
				<ShowsCards
					image={artist1}
					genre="Folk"
					singerName="Benny Dayal"
				/>
				<ShowsCards
					image={artist2}
					genre="Bollywood"
					singerName="Vijay Yesudas"
				/>
				<ShowsCards
					image={artist3}
					genre="Folk"
					singerName="Andrea Jemeriah"
				/>
				<ShowsCards
					image={artist4}
					genre="Folk"
					singerName="Shilpa Rao"
				/>
			</div>
		</div>
	);
};

export default UpcomingShows;
