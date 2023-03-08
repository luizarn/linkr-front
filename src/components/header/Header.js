import styled from "styled-components";
export default function Header() {
  return (
    <>
      <HeaderBox>
        <h1>linkr</h1>
        <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" alt="" />
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
    justify-content:space-between;
  h1 {
    font-family: 'Passion One';
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
  }
  @media (max-width: 800px) {
   h1{
    font-size: 45px;
    line-height: 50px;
   } 
  }

  `
