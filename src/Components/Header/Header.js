import React from "react";
import { FiChevronDown, FiSearch, FiMoreVertical } from "react-icons/fi";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Left>
        <Logo src="/image/logo.svg" />
        <Nav1>
          <span>Illustration</span>
          <Icon>
            <FiChevronDown />
          </Icon>
        </Nav1>
        <Nav>
          <span>Artist</span>
        </Nav>
      </Left>
      <Mid>
        <InputHolder>
          <SearchIcon>
            <FiSearch />
          </SearchIcon>
          <Input placeholder="Search" />
        </InputHolder>
      </Mid>
      <Right>
        <Button>try pro free</Button>
        <Button2>Sign In</Button2>
        <MenuIcon>
          <FiMoreVertical
            id="open"
            onClick={() => {
              document.getElementById("dropDown").style.height = "370px";
              document.getElementById("close").style.display = "block";
              document.getElementById("open").style.display = "none";
            }}
          />
          <FiMoreVertical
            id="close"
            onClick={() => {
              document.getElementById("dropDown").style.height = "0";
              document.getElementById("open").style.display = "block";
              document.getElementById("close").style.display = "none";
            }}
            style={{
              display: "none"
            }}
          />
        </MenuIcon>
        <DropDown id="dropDown">
          <DropButton>Try Pro for Free</DropButton>
          <span>Illustration</span>
          <span>Categories</span>
          <span>Artist</span>
          <hr />
          <span>Sign In</span>
          <span>Create an Account</span>
          <span>Plans</span>
          <span>
            <Red />
            What's New
          </span>
          <span>Support</span>
        </DropDown>
      </Right>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Mid = styled.div`
  flex: 0.8;
`;

const Right = styled.div`
  display: flex;
`;

const Logo = styled.img``;

const Nav1 = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  font-weight: 500;
  cursor: pointer;
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  font-weight: 500;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-left: 3px;
`;

const InputHolder = styled.div`
  display: flex;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  align-items: center;
`;

const SearchIcon = styled.div`
  margin: 10px;
  opacity: 0.3;
`;

const Input = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  ::placeholder {
    /* color: red; */
  }
`;

const Button = styled.div`
  text-transform: capitalize;
  background-color: #005eff;
  color: white;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    color: #005eff;
    outline: 1px solid #005eff;
    background: white;
  }
  @media screen and (max-width: 400px) {
    display: none;
  }
`;

const Button2 = styled.div`
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 350ms;
  margin-left: 20px;
  /* color: #005eff; */
  outline: 1px solid rgba(0, 0, 0, 0.3);
  background: white;
  :hover {
    outline: 2px solid #005eff;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  outline: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 100px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  font-size: 20px;
  cursor: pointer;
  transition: all 350ms;
  position: relative;
  :hover {
    outline: 1px solid #005eff;
  }
  @media screen and (max-width: 425px) {
    outline: none;
    transform: rotate(90deg);
  }
`;

const DropDown = styled.div`
  position: absolute;
  top: 60px;
  background: white;
  right: 20px;
  width: 230px;
  height: 0;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  transition: all 250ms;
  span {
    width: 80%;
    display: flex;
    align-items: center;
  }
  hr {
    width: 100%;
  }
`;

const DropButton = styled.div`
  width: 80%;
  height: 30px;
  color: white;
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border-radius: 5px;
`;

const Red = styled.div`
  width: 9px;
  height: 9px;
  background: red;
  border-radius: 50px;
  margin-right: 10px;
`;

// const DropDown = styled.div``

// const DropDown = styled.div``

// const DropDown = styled.div``

// const DropDown = styled.div``
