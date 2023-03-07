import styled from "styled-components";
export default function Input({ placeholder, type, onChange, name, value, required }) {
  return (
    <>
      <InputExemple
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        required={required}
      ></InputExemple>
    </>
  );
}

const InputExemple = styled.input`
  width: 60%;
  height: 58px;
  background: #ffffff;
  border: none;
  border-radius: 5px;
  font-family: "Oswald";
  font-weight: 700;
  font-size: 27px;
  margin-top: 13px;
`;
