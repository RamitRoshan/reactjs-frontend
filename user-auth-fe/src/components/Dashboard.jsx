import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: '0 auto' }}>
      <h1>Dashboard</h1>
      <p>Welcome{user?.name ? `, ${user.name}` : ''}!</p>
      <button onClick={handleLogout} style={{ padding: '8px 12px', marginTop: 12 }}>
        Logout
      </button>
    </div>
  );
}