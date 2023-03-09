import styled from "styled-components";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import LayoutHome from "../LayoutHome/LayoutHome";
import { useContext, useEffect, useState } from "react";

import { API_URL } from "../../API_URL";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";

export default function SignUpPage() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        username: "",
        pictureurl: ""
      });
      const navigate = useNavigate();

      function SignUp(){
        const post = axios.post(`${API_URL}/sign-up`, form);
        if(!form.email || !form.password || !form.username || !form.pictureurl){
          return alert("Preencha todos os campos!")
        }
        post.then((res) => {
          alert("Sucesso! Usuário cadastrado");
          console.log(res.data)
          navigate("/");
        });
        post.catch((err) => console.log(err.response.data.message));
      }
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
            text="Sin Up"
            onClick={SignUp}
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