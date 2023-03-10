import GlobalStyle from "./styles/GlobalStyle.js";
import styled from "styled-components";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SignInPage.js";
import SignUpPage from "./pages/SignUpPage/SignUpPage.js";
import AuthProvider from "./contexts/AuthContext.js";
import HashtagPage from "./pages/HashtagPage/HashtagPage.js";
import TimelinePage from "./pages/TimelinePage/TimelinePage.js";
import UserPage from "./pages/UserPostsPage/UserPage.js";

export default function App() {
  return (
    <BrowserRouter>
      <Content>
        <GlobalStyle />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/timeline" element={<TimelinePage/>}/> 
            <Route path="/timeline/user/:id" element={<UserPage />} />
            <Route path="/hashtag/:hashtag" element={<HashtagPage/>}/>
          </Routes>
          </AuthProvider>
      </Content>
    </BrowserRouter>
  );
}

const Content = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #333333;
  display: flex;
  justify-content: center;
`;
