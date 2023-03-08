import styled from "styled-components";
export default function Header() {
    return (
      <>
        <HeaderBox>
            <h1>linkr</h1>
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
    align-items: center;
  h1 {
    font-family: 'Passion One';
    font-style: normal;
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    color: white;
    margin-left: 10px;
  }
  `