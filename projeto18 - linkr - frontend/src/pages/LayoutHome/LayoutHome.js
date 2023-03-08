import styled from "styled-components";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
export default function LayoutHome() {
  return (
    <>
      <LeftBar>
        <div>
          <h1>linkr</h1>
          <h2>save, share and discover the best links on the web</h2>
        </div>
      </LeftBar>
    </>
  );
}

const LeftBar = styled.div`
  width: 70%;
  background-color: #151515;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    text-align: center;
    width: 400px;
    text-align: start;
  }
  h2 {
    font-size: 43px;
    line-height: 64px;
    color: #ffffff;
  }
  h1 {
    font-family: "Passion One";
    font-style: normal;
    font-weight: 700;
    font-size: 106px;
    line-height: 117px;
    color: #ffffff;
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 200px;
    font-size: 20px;
    div {
      width: 237px;
      font-size: 20px;
    }
    h1 {
      font-weight: 700;
      font-size: 76px;
      line-height: 84px;
      text-align: center;
    }
    h2 {
      font-weight: 700;
      font-size: 23px;
      line-height: 34px;
      text-align: center;
    }
  }
`;
