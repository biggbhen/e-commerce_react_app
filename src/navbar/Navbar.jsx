import React from 'react';
import { Nav } from './navbarStyle';
import logo from '../assets/logo.svg';

const Navbar = () => {
	return (
		<Nav>
			<div>
				<figure class='logo'>
					<img src={logo} alt='logo' />
				</figure>
				<ul>
					<li>Collection</li>
					<li>Men</li>
					<li>Women</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</div>
			<div></div>
		</Nav>
	);
};

export default Navbar;
