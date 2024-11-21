import React from "react";
import "./styles/index.scss";
import { SignUpForm } from "./components/SignUpForm";
import { LoginForm } from "./components/LoginForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskPage from "./pages/Task";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
};

export default App;
