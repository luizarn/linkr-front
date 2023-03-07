import styled from "styled-components";

export default function LayoutHome() {
  return (
    <>
      <Content>
        <LeftBar></LeftBar>
        <RighBar></RighBar>
      </Content>
    </>
  );
}

const Content = styled.div`

`;
const LeftBar = styled.div`

`;
const RighBar = styled.div`
  background-color: #151515;
`;
