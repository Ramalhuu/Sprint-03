import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import ListaJogadoras from '../listajogadoras/page';
import Login from '../login/page';
import NotificationCenter from './NotificationCenter';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import { ErrorProvider } from '../contexts/ErrorContext';

// Componente para rotas protegidas
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

// Componente para rotas públicas (redireciona se já autenticado)
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
            {/* Rota pública - Login */}
            <Route 
              path="/login" 
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              } 
            />
            
            {/* Rotas protegidas */}
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
            
            {/* Rota catch-all */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ErrorProvider>
  );
}

export default AppRouter;

