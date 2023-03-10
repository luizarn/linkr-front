import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { API_URL } from "../../API_URL";
import SearchBar from "../SearchBar/SearchBar";

export default function Header() {
  const [logoutIcon, setLogoutIcon] = useState(false)
  const [logoutDiv, setLogoutDiv] = useState(false)
  const navigate = useNavigate();
  const { userId, token } = useContext(AuthContext);
  function LogoutToggle(){
    setLogoutDiv(!logoutDiv)
    setLogoutIcon(!logoutIcon)
  }
  
  function LogoutUser(){
    
    const del = axios.delete(`${API_URL}/delete`, {
      headers: {
        'Authorization': `Basic ${token}` 
      }
    }); 
    del.then((res) => {
      localStorage.removeItem("userToken")
      navigate("/");
    });
    del.catch((err) => console.log(err.response.data));
  }

  return (
    <>
      <HeaderBox>
        <div>
          <h1>linkr</h1>
        </div>
        <SearchBar/>
        <div onClick={LogoutToggle}>
        {logoutIcon ? <IoIosArrowUp /> : <IoIosArrowDown />}
          <img src={userId.picture_url} onClick={LogoutToggle}/>
        </div>
      </HeaderBox>
      {logoutDiv ? <Logout onClick={LogoutUser}><p>Logout</p></Logout>: <> </>}
    </>
  );
}
const HeaderBox = styled.div`
  width: 100%;
  height: 75px;
  position: fixed;
  background-color: #151515;
  display: flex;
  justify-content: space-between;
  padding: 1%;
  h1 {
    font-family: "Passion One";
    font-style: normal;
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    color: white;
    margin-left: 10px;
  }
  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 9px;
    cursor: pointer;
  }
  svg {
    color: white;
    font-size: 28px;
  }
  @media (max-width: 800px) {
   h1{
    font-size: 45px;
    line-height: 50px;
   } 
  }
  `
const Logout = styled.div`
  width: 100px;
  height: 43px;
  background-color: #151515;
  border-radius: 0px 0px 20px 20px;
  margin-top: 75px;
  position: absolute;
  top: 0;
  right: 1px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
  }
`