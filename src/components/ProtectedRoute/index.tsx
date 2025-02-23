import { Redirect, Route } from 'react-router-dom';

interface ProtectedRouteProps {
  component: React.FC<any>;
  path: string;
  exact?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
