import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import ListaJogadoras from '../listajogadoras/page';
import Login from '../login/page';
import NotificationCenter from './NotificationCenter';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import { ErrorProvider } from '../contexts/ErrorContext';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function PublicRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }
  return children;
}

function AppRouter() {
  return (
    <ErrorProvider>
      <AuthProvider>
        <BrowserRouter>
          <NotificationCenter />
          <Routes>
            <Route 
              path="/login" 
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              } 
            />
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/home" replace />} />
              <Route path="home" element={<Home />} />
              <Route path="jogadoras" element={<ListaJogadoras />} />
            </Route>
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ErrorProvider>
  );
}

export default AppRouter;
