import styled from "styled-components";
import Header from "../../components/header/Header";


export default function TimelinePage() {

    return (
        <>
            <Content>
                <Header/>
            </Content>
        </>

    );
}
const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
// const RighBar = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 30%;
//   h1 {
//     font-family: "Lato";
//     font-style: normal;
//     font-weight: 400;
//     font-size: 20px;
//     line-height: 24px;
//     color: #ffffff;
//     text-decoration-line: underline;
//   }
//   @media (max-width: 800px) {
//     width: 100%;
//     margin-top: 40px;
//     input, button{
//         width: 80%;
//     }
//   }
// `;