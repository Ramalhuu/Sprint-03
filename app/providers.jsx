"use client";

import { ErrorProvider } from './components/ErrorContext';
import { AuthProvider } from './components/AuthContext';

export default function Providers({ children }) {
  return (
    <ErrorProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ErrorProvider>
  );
}