import React, { useEffect } from 'react';
import './styles/index.scss';
import { SignUpForm } from './components/SignUpForm';
import { LoginForm } from './components/LoginForm';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import TaskPage from './pages/Task';
import { AuthPage } from './pages/Auth';
import { AuthProvider, useAuthContext } from './contexts/AuthContext';
import { useAuthStore } from './store/useAuthStore';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to='/login' replace />;
  }

  return <>{children}</>;
};

const App: React.FC = () => {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<AuthPage />} />
          <Route
            path='/tasks'
            element={
              <ProtectedRoute>
                <TaskPage />
              </ProtectedRoute>
            }
          />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignUpForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
