import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user data

  const login = (username, password) => {
    // Simulate login logic (this could be an API call)
    const loggedInUser = { username }; // Replace with real login logic
    setUser(loggedInUser);
    return true;
  };

  const signOut = () => {
    setUser(null); // Clear user data on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
