import './DashboardContainer.css';
import Dashboard from './Dashboard';
import heart from '../../images/heart.svg';
import calendar from '../../images/calendar.svg';

const DashboardContainer = () => {
	return (
		<div className="container container-dashboard">
			<Dashboard image={heart} />
			<Dashboard image={calendar} />
			<Dashboard image={calendar} />
			<Dashboard image={calendar} />
		</div>
	);
};

export default DashboardContainer;
