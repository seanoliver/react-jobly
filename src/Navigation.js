import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { Navbar, Nav, NavbarBrand } from 'reactstrap';
import { useContext } from 'react';
import userContext from './userContext';

/**
 *
 * Renders a navbar.
 *
 * Props:
 *  - currentUser: object
 * 	- handleLogout() : function
 *
 * State:
 * - none
 *
 * App -> Navigation
 *
 */
function Navigation({ currentUser, handleLogout }) {
	const { activeUser } = useContext(userContext);


	return (
		<Navbar className='Navigation'>
			<NavbarBrand href='/'>Jobly</NavbarBrand>

			{activeUser?.username ? (
				<Nav>
					<NavLink
						to='/companies'
						className={'Navigation-item'}>
						Companies
					</NavLink>
					<NavLink
						to='/jobs'
						className={'Navigation-item'}>
						Jobs
					</NavLink>
					<NavLink
						to='/profile'
						className={'Navigation-item'}>
						Profile
					</NavLink>
					<NavLink
						onClick={handleLogout}
						to={'/'}
						className={'Navigation-item'}>
						Log out {activeUser.username}
					</NavLink>
				</Nav>
			) : (
				<Nav>
					<NavLink
						to='/login'
						className={'Navigation-item'}>
						Login
					</NavLink>
					<NavLink
						to='/signup'
						className={'Navigation-item'}>
						Sign Up
					</NavLink>
				</Nav>
			)}
		</Navbar>
	);
}

export default Navigation;
