import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { Navbar, Nav, NavbarBrand } from 'reactstrap';
/**
 *
 * Renders a navbar.
 *
 * Props:
 *  - none
 *
 * State:
 * - none
 *
 * App -> Navigation
 *
 */
function Navigation({ currentUser }) {
	return (
		<Navbar className='Navigation'>
			<NavbarBrand href='/'>Jobly</NavbarBrand>

			{currentUser ? (
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
				</Nav>
			) : (
				<Nav>
					<NavLink
						to='/login'
						className={'Navgation-item'}>
						Login
					</NavLink>
					<NavLink
						to='/signup'
						className={'Navgation-item'}>
						Sign Up
					</NavLink>
				</Nav>
			)}
		</Navbar>
	);
}

export default Navigation;
