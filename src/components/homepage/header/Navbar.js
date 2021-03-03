import './Navbar.css';
import basket from '../../../images/basket.svg';
import search from '../../../images/search.svg';
import hamburger from '../../../images/hamburger.svg';

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<a href="https://example.com">
						<img className="search" src={search} alt="search" />
						Search
					</a>
				</li>
				<li>
					<a href="https://example.com">Help</a>
				</li>
				<li>
					<a href="https://example.com">Account</a>
				</li>
			</ul>
			<div>
				<a href="https://example.com">
					<img className="basket" src={basket} alt="basket" />
				</a>
			</div>
			<div>
				<a href="https://example.com">
					<img
						className="hamburger"
						src={hamburger}
						alt="hamburger"
					/>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
