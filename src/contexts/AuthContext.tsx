
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { toast } from "sonner";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (pin: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (pin: string): boolean => {
    // Simple PIN authentication - in a real app, this would be handled by a secure backend
    if (pin === '123456') {
      setIsAuthenticated(true);
      toast.success("Login successful");
      return true;
    } else {
      toast.error("Invalid PIN");
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    toast.info("Logged out successfully");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
