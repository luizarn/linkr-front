import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
    margin-top: 130px;
    font-weight: 700;
    font-size: 43px;
    color: #ffffff;
    @media (max-width: 800px) {
   margin-left: 17px;
   font-size: 33px;
  }
`;

const Container = styled.div`
margin-top: 130px;
  margin: 0 auto;
    width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`;

const RightBoxPost = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  width: 100%;
  h1 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color:#707070;
  }
  @media (max-width: 800px) {
  align-items: center;
  margin-left: 0px;
  }
`;

const ImgProfile = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`

const TagsDiv = styled.div`
   margin-top: 215px;
`

const P1 = styled.div`
   
`
const P2 = styled.div`
@media (max-width: 800px) {
  visibility: none;
  }
`

const BoxPost = styled.div`
background: #171717;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
height: 276px;
margin-top: 43px;
margin-bottom: 16px;
padding: 21px;
display: flex;
@media (max-width: 800px) {
    border-radius: 0px;
    margin-top: 19px;
    height: 234px;
  }
`

export {Container, TagsDiv, Title, BoxPost, P1, P2, ImgProfile, RightBoxPost, Content};