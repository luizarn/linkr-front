import styled from "styled-components";
export default function Input({placeholder, type, onChange, name, value}) {
  return (
    <>
      <InputExemple placeholder={placeholder} type={type} name={name} onChange={onChange}></InputExemple>
    </>
  );
}

const InputExemple = styled.input``;
