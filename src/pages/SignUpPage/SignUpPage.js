import styled from "styled-components";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import LayoutHome from "../LayoutHome/LayoutHome";
import { useContext, useEffect, useState } from "react";

export default function SignUpPage() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        username: "",
        pictureUrl: ""
      });
    
      function Form(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      }
  return (
    <>
      <Content>
        <LayoutHome />
        <RighBar>
          <Input 
            placeholder="e-mail"
            name="email"
            type="text"
            onChange={Form}
          />
          <Input 
            placeholder="password"
            name="password"
            type="password"
            onChange={Form}
            required="true"
          />
          <Input 
            placeholder="username"
            name="username"
            type="text"
            onChange={Form}
          />
          <Input 
            placeholder="picture url"
            name="pictureUrl"
            type="url"
            onChange={Form}
          />
          <Button 
            text="Log In" 
          />
          <Link to="/">
            <h1>Switch back to log in</h1>
          </Link>
        </RighBar>
      </Content>
    </>
  );
}
const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const RighBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  h1 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
    text-decoration-line: underline;
  }
  @media (max-width: 800px) {
    width: 100%;
    margin-top: 40px;
    input, button{
        width: 80%;
    }
  }
`;