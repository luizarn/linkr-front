import GlobalStyle from "./styles/GlobalStyle.js";
import styled from "styled-components";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SignInPage.js";
import SignUpPage from "./pages/SignUpPage/SignUpPage.js";
import AuthProvider from "./contexts/AuthContext.js";
import HashtagPage from "./pages/HashtagPage/HashtagPage.js";
import TimelinePage from "./pages/TimelinePage/TimelinePage.js";
import SearchBar from "./components/SearchBar/SearchBar.js";

export default function App() {
  return (
    <BrowserRouter>
      <Content>
        <GlobalStyle />
        <AuthProvider>
          {/* <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/hashtag" element={<HashtagPage/>}/>
            <Route path="/timeline" element={<TimelinePage/>}/>
          </Routes> */}
           <SearchBar />
        </AuthProvider>
      </Content>
    </BrowserRouter>
  );
}

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #333333;
  display: flex;
  justify-content: center;
`;
