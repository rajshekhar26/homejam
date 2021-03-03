import './Header.css';
import logo from './../../../images/logo.png';
import Navbar from './Navbar';

const Header = () => {
	return (
		<div className="container" id="container-header">
			<header>
				<img src={logo} alt="Home" />
				<Navbar />
			</header>
		</div>
	);
};

export default Header;
