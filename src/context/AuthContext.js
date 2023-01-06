import { createContext } from "react";
import { useAuth } from "../hooks/useAuth";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const toDoList = useAuth();

  return (
    <AuthContext.Provider value={toDoList}>{children}</AuthContext.Provider>
  );
};
