import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;