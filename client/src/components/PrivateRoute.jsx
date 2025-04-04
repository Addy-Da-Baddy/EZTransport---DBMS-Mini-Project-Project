import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute({ children, adminOnly = false }) {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  if (adminOnly && user.user_type !== 'admin') {
    return <Navigate to="/" />;
  }
  
  return children;
}