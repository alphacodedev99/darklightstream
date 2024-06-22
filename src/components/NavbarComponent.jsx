import React from 'react';

import darkLogo from '../assets/logo-dark.png';
import ligthLogo from '../assets/logo-light.png';

// icons
import { CiSun } from 'react-icons/ci';
import { FaRegMoon } from 'react-icons/fa';

function NavbarComponent({ darkMode, setDarkMode }) {
	function handleDarkMode() {
		setDarkMode(!darkMode);
	}

	return (
		<div className='flex items-center justify-between h-[80px]'>
			{darkMode ? (
				<img src={ligthLogo} alt='darklogo' />
			) : (
				<img src={darkLogo} alt='lightLogo' />
			)}

			<ul className='flex items-center gap-[10px] dark:text-white '>
				<li>Store</li>
				<li>Developer</li>
				<li>Teams</li>
				<li>
					Pro <span>New</span>
				</li>
				<li>Changelog</li>
				<li>Pricing</li>
				<li>Blog</li>
			</ul>

			{darkMode ? (
				<CiSun size={24} color='white' onClick={handleDarkMode} />
			) : (
				<FaRegMoon size={24} onClick={handleDarkMode} />
			)}
		</div>
	);
}

export default NavbarComponent;
