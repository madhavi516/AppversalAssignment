import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ProtectedRoute from './components/layout/ProtectedRoute';
import UserList from './features/users/UserList';
import ActivityFeed from './features/activities/ActivityFeed';
import RewardsList from './features/rewards/RewardsList';
import AdminDashboard from './features/admin/AdminDashboard';
import Analytics from './features/admin/Analytics';
import Login from './features/auth/Login';
import Logout from './features/auth/Logout';
import { GlobalStyle, Container } from './styles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/activities" element={<ActivityFeed />} />
          <Route path="/rewards" element={<RewardsList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin" element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/analytics" element={
            <ProtectedRoute role="admin">
              <Analytics />
            </ProtectedRoute>
          } />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
