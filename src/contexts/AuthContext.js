import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const tokenLocalStorage = localStorage.getItem("userToken");
  const [token, setToken] = useState(tokenLocalStorage);
  const [userId, setUserId] = useState({})
  function addToken(token) {
    setToken(token)
    localStorage.setItem('userToken', token)
}

  return (
    <AuthContext.Provider value={{token, setToken, addToken, userId, setUserId}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;