import styled from "styled-components";

const borderRadius = "10px";

export const Button = styled.button`
  margin: 10px;
  background-color: rgb(32, 107, 163);
  color: whitesmoke;
  font-size: 1.2em;
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
  top: 200px;
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

export const Navmenu = styled.ul`
  all: unset;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const NavmenuItem = styled.li`
  list-style: none;
  margin-left: 20px;
  font-size: 1.2em;
`;

export const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid black;
`;

export const MenuHeader = styled.h1`
  font-weight: 900;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  width: 90%;
  height: 70px;
  margin: 20px;
  padding: 20px;
  border: 1px solid black;
  border-radius: ${borderRadius};
`;

export const CardHeader = styled.h1`
  font-weight: 700;
`;
