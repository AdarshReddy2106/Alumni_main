import PropTypes from 'prop-types'; // Import PropTypes
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute1 = ({ token }) => {
  return token ? <Outlet /> : <Navigate to="/AlumniDirectorySignIn" />;
};

PrivateRoute1.propTypes = {
    token: PropTypes.bool.isRequired, // Ensure token is a required boolean
};

export default PrivateRoute1;
