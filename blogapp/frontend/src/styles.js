import styled from "styled-components";

const borderRadius = "10px";

export const Button = styled.button`
  background-color: rgb(32, 107, 163);
  color: whitesmoke;
  font-size: 1.4em;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: ${borderRadius};
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: transform 500ms ease-in-out;
  }
  &:active {
    transform: scale(1);
  }
`;

export const LoginHeader = styled.h2`
  width: 250px;
  text-align: center;
`;

export const Label = styled.label`
  font-size: 1.2em;
  width: 250px;
`;

export const Input = styled.input`
  font-size: 1.2em;
  width: 250px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  border: 1px solid black;
  border-radius: ${borderRadius};
`;

export const Loginform = styled(Form)`
  position: relative;
  bottom: 200px;
  height: 400px;
`;

export const Ul = styled.ul`
  all: unset;
  list-style: none;
  margin-bottom: 5px;
`;

export const Li = styled.li`
  list-style: none;
  margin-bottom: 10px;
`;
