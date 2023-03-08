import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 563px;
    height: 45px;
    background: #ffffff;
    display: inline-block;
    align-items: center;
    margin: 0 auto;
    position: relative;
    border-radius: 8px;

  .debounced-input {
    border: solid 1px lightgray;
    border-color: lightgray;
    border-radius: 8px;
    width: 563px;
    height: 45px;
    background: #ffffff;
    padding-right: 10px;
    padding-left: 10px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
  }

  .debounced-input::placeholder {
    color: #c6c6c6;
  }

  .icon {
    position: absolute;
    top: 50%;
    right: 10px;
    color: #c6c6c6;
    transform: translateY(-50%);
    width: 21px;
    height: 21px;
  }
`;

export const HiddenBox = styled.div`
    display: ${props => props.open ? "block" : "none"};
    width: 563px;
    height: 131px;
    background: #E7E7E7;
    border-radius: 8px;
    overflow-y: auto;
`
export const HiddenUsers = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;

    img {
        object-fit: cover;
        width: 39px;
        height: 39px;
        border-radius: 50%;
        }

    h2 {    
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
        margin: 0 10px;
        }
`