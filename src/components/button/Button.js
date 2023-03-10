import styled from "styled-components";
export default function Button({text, onClick, disabled, required}) {
    return(<>
    <ButtonExemple onClick={onClick} disabled={disabled} required={required}>
        {text}
    </ButtonExemple>
    </>)
}
const ButtonExemple = styled.button`
    width: 60%;
	height: 58px;
    background: #1877F2;
	border-radius: 6px;
    cursor: pointer;
    color: #FFFFFF;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    margin: 13px 0 13px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
`