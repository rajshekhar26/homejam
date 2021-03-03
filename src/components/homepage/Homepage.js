import './Homepage.css';
import Header from './header/Header';
import Hero from './Hero';
import DashboardContainer from '../dashboard/DashboardContainer';

const Homepage = () => {
	return (
		<div className="main">
			<div className="container-home">
				<Header />
				<Hero />
				<DashboardContainer />
			</div>
		</div>
	);
};

export default Homepage;
