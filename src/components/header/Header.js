import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";
export default function Header() {
  return (
    <>
      <HeaderBox>
        <div>
          <h1>linkr</h1>
        </div>
        <div>
        <IoIosArrowUp />
          <img src="https://s2.glbimg.com/DVfIiTGl-KnJU41UcD9Yoj33MZM=/e.glbimg.com/og/ed/f/original/2021/06/16/doge.jpg" />
        </div>
      </HeaderBox>
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
  }
  img {
    width: 53px;
    height: 53px;
    border-radius: 50%;
  }

`;
