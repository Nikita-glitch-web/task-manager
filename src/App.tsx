import React from "react";
import "./styles/index.scss";
import { SignUpForm } from "./components/SignUpForm";
import { LoginForm } from "./components/LoginForm";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import TaskPage from "./pages/Task";
import { AuthProvider, useAuthContext } from "./contexts/AuthContext";
import { ThemeContextProvider } from "./theme/ThemeContext";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route
              path="/tasks"
              element={
                <ProtectedRoute>
                  <TaskPage />
                </ProtectedRoute>
              }
            />
            <Route path="/signup" element={<SignUpForm />} />
          </Routes>
        </Router>
      </ThemeContextProvider>
    </AuthProvider>
  );
};

export default App;
