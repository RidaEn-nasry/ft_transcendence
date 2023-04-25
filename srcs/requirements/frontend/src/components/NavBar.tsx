import logo from '/logo.svg'
import styled from 'styled-components'
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from '../pages/landingPage/HomePage'
import AboutPage from '../pages/landingPage/AboutPage';
import { useState } from 'react';
// import ContactPage from '../pages/landingPage/ContactPage';
import '../index.scss'

const NavbarContainer = styled.header`
	position: fixed;
	z-index: 1;
	width: 100%;
	background-color: none;
	header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		.logo {
			width: 80px;
			height: 80px;
			margin-left: 3rem;
			img {
				width: 100%;
				box-sizing: border-box;
			}
		}
		nav {
			z-index: 1;
			margin-right: 4rem;
			display: flex;
			gap: 1rem;
			a {
				color: var(--fontColor);
				text-decoration: none;
				border: 1px solid transparent;
				padding: .9rem 2rem;
			}
			.active {
				border: 1px solid var(--goldColor);
				border-radius: 10px;
			}
		}
	}
`;

const NavBar = () => {
	const [activeLink, setActiveLink] = useState('Home')
	const handleLinkClick = (link: string) => {
		setActiveLink(link);
	};
	return (
		<NavbarContainer>
			<header>
				<Link to="/" className='logo'><img src={logo} alt="PingPong Logo" /></Link>
				<nav>
					<Link to="/" className={activeLink === 'Home' ? 'active' : ''} onClick={() => handleLinkClick('Home')}>Home</Link>
					<Link to="/about" className={activeLink === 'About' ? 'active' : ''} onClick={() => handleLinkClick('About')}>About</Link>
					<Link to="/contact" className={activeLink === 'Contact' ? 'active' : ''} onClick={() => handleLinkClick('Contact')}>Contact</Link>
				</nav>
			</header>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
			</Routes>
		</NavbarContainer>
	);
}

export	default NavBar


{/* <Link
            to="/"
            className={activeLink === 'Home' ? 'active' : ''}
            onClick={() => handleLinkClick('Home')}
          >
            Home
          </Link> */}