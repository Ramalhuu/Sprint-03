
"use client";

import { AuthProvider } from './components/AuthContext';
import { JogadorasProvider } from './components/hooks/JogadorasContext'; 

export default function Providers({ children }) {
  return (
    <JogadorasProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </JogadorasProvider>
  );
}