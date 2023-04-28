import { Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import ProfileForm from './ProfileForm';

/**
 * Renders route components
 *
 * Props:
 *  - register - function
 *  - login - function
 *  - profile - function
 *  - currentUser - object
 *
 * State:
 * - none
 *
 * App -> RoutesList -> { Homepage, CompanyList, CompanyDetail, JobList }
 * 
 */
function RoutesList({ register, login, profile, currentUser }) {
	return (
		<Routes>
			<Route
				path='/'
				element={<Homepage />}
			/>
			<Route
				path='/companies'
				element={<CompanyList />}
			/>
			<Route
				path='/companies/:handle'
				element={<CompanyDetail />}
			/>
			<Route
				path='/jobs'
				element={<JobList />}
			/>
			<Route
				path='/login'
				element={<LoginForm handleRequest={login} />}
			/>
			<Route
				path='/signup'
				element={<SignUpForm handleRequest={register} />}
			/>
			<Route
				path='/profile'
				element={<ProfileForm handleRequest={profile} currentUser={currentUser} />}
			/>
			<Route
				path='*'
				element={<Navigate to='/' />}
			/>
		</Routes>
	);
}

export default RoutesList;
