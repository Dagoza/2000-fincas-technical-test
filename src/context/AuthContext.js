import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const state = useState();

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
