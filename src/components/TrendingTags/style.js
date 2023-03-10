import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 301px;
    height: 406px;
    background: #171717;
    border-radius: 16px;
    @media (max-width: 800px) {
        display: none;
      }
`

export const Header = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 10px;
`

export const DivLine = styled.div`
    border: 1px solid #484848;
    height: 3px;
    width: 100%;
    background: #484848;
`

export const Body = styled.div`
    display:flex;
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const TextH1 = styled.h1`
    font-weight: 700;
    font-size: 27px;
    color: #ffffff;
    padding: 10px 0 0 15px;
`

export const TextH2 = styled.h2`
    font-weight: 700;
    font-size: 19px;
    color: #ffffff;
    line-height: 32px;
    padding-top: 5px;
    padding-left: 15px;
`