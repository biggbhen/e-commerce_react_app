import React from 'react';
import { Nav } from './navbarStyle';
import logo from '../assets/logo.svg';
import cart from '../assets/icon-cart.svg';
import user from '../assets/image-avatar.png';

const Navbar = () => {
	return (
		<Nav>
			<div className='leftSect'>
				<figure className='logo'>
					<img src={logo} alt='logo' />
				</figure>
				<ul className='category'>
					<li>Collection</li>
					<li>Men</li>
					<li>Women</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</div>
			<div className='rightSect'>
				<figure className='cart'>
					<img src={cart} alt='cart' />
				</figure>
				<figure className='user'>
					<img src={user} alt='user' />
				</figure>
			</div>
		</Nav>
	);
};

export default Navbar;
