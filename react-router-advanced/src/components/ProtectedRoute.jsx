import React from "react";
import { Navigate } from "react-router-dom";

// 🔑 Simple custom hook for authentication (mock)
function useAuth() {
  // Simulated authentication state (you can connect to real auth later)
  const [isAuthenticated] = React.useState(true); // change to false to test redirect
  return { isAuthenticated };
}

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
