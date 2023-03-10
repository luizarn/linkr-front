import styled from "styled-components";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import LayoutHome from "../LayoutHome/LayoutHome";
import { useContext, useEffect, useState } from "react";
import { API_URL } from "../../API_URL";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";

export default function SignInPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [disabledButton, setDisabledButton] = useState(false)

  const navigate = useNavigate();
  const { token, setToken, addToken, setUserId } = useContext(AuthContext);

  function Login(){
    setDisabledButton(true)
    const post = axios.post(`${API_URL}/sign-in`, form);
    if(!form.email || !form.password){
      return alert("Please fill the field correctly!")
    }
    post.then((res) => {
      addToken(res.data.token);
      setUserId(res.data.userData)
      console.log(res.data);
      navigate("/timeline");
    });
    post.catch((err) => alert(err.response.data));
    setDisabledButton(false)
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
          />
          <Button 
          text="Log In" 
          onClick={Login} 
          disabled={disabledButton}
          />
          <Link to="/sign-up" >
            <h1>First time? Create an account</h1>
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
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    input,
    button {
      width: 80%;
    }
  }
`;
