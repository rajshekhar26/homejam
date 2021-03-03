import './Dashboard.css';

const Dashboard = (props) => {
	return (
		<div className="dashboard">
			<img className="icon" src={props.image} alt="" />
			<h3>0</h3>
			<p>Label</p>
		</div>
	);
};

export default Dashboard;
