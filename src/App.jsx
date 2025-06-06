import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import { useAuth } from "context/AuthContext";

const App = () => {
  const { token } = useAuth();
  const location = useLocation();

  // Wrapper to protect private routes
  const PrivateRoute = ({ children }) => {
    return token ? children : <Navigate to="/auth/sign-in" replace state={{ from: location }} />;
  };

  return (
    <>
      <Routes>
        {/* Public Auth routes */}
        <Route path="/auth/*" element={<AuthLayout />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        />

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
