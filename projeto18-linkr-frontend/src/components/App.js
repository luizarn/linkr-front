import GlobalStyle from "./styles/GlobalStyle.js";
import styled from "styled-components";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SignInPage.js";
import SignUpPage from "./pages/SignUpPage/SignUpPage.js";
export default function App() {
    return (
      <BrowserRouter>
          <GlobalStyle />
          <AuthProvider>
            <Routes>
              <Route path="/" element={<SignInPage />} />
              <Route path="/" element={<SignUpPage />} />
            </Routes>
          </AuthProvider>
      </BrowserRouter>
    );
  }