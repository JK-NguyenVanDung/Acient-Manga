import styled from "styled-components";
import { FaMagento, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import { Avatar } from "@material-ui/core";
export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  max-width: 100%;
  padding: 10px 0px 10px 0px;
  border: 1px solid #000;
  border-left: none;
  border-right: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavBarContainer = styled(Container)`
  display: inline-flex;
  justify-content: space-between;
  height: 80px;
  max-width: 100%;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  &:hover {
    color: #4b59f7;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
    width: 70px;
    margin-right: 20px;
  }
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
  @media screen and (max-width: 1024px) {
    font-size: 0.7rem;
    width: 20px;
    margin-right: 20px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    z-index: 4;

    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    margin-top: -10px;
    margin-right: -10px;

    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: inline-flex;
  align-items: center;
  list-style: none;
  text-align: center;
  height: 100%;
  width: ${(props) => (props.width ? props.width : "700px")};

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1000%;
    position: absolute;
    top: 78px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
    z-index: 10;
  }
`;
export const NavItem = styled.div`
  height: 70px;
  border-bottom: 2px solid transparent;
  display: relative;
  width: ${(props) => (props.width ? props.width : "200px")};
  &:hover {
    border-bottom: ${(props) =>
      props.borderBottom ? props.borderBottom : "2px solid #4b59f7"};
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    flex-direction: column;

    &:hover {
      background: #252831;
      border-left: 4px solid #632ce4;
      border-bottom: none;
      cursor: pointer;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    color: #4b59f7;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  @media screen and (max-width: 1024px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #ffffff;
      transition: all 0.3s ease;
    }
  }
`;
export const NavBtn = styled.button`
  outline: none;
  border: 0;
  background: none;
  height: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:focus {
    border: 0;
    outline: none;
  }
  &:hover {
    color: #4b59f7;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  @media screen and (max-width: 1024px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 10px;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
      cursor: pointer;
    }
  }
`;
export const NavItemBtn = styled.li`
  padding-left: 10px;
  width: ${(props) => (props.width ? props.width : "200px")};

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
  }
`;

export const DdList = styled.ul`
  list-style: none;
  border-radius: 5px;
  background-color: #696969;
  position: ${(props) => (props.position ? props.position : "absolute")};
  top: ${(props) => (props.top ? props.top : " 65px")};
  cursor: default;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: auto;
  &:hover .DdListItem {
    visibility: true;
  }
  @media screen and (max-width: 1024px) {
    border-radius: 0px;

    background: #414757;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    top: 0px;
    width: 100%;
    overflow-x: hidden;
    overflow-y: ${(props) => (props.overflowY ? props.overflowY : "scroll")};
    position: relative;
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: none;
    }
    &::-webkit-scrollbar {
      width: 12px;
      background-color: none;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #555;
    }
    height: 250px;
  }
`;

export const DdListItem = styled.li`
  display: inline-block;

  &:hover {
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    &:hover {
      background: #632ce4;
      cursor: pointer;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 16px 32px;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }
`;

export const Wrapper = styled.div`
  max-height: 45%;
  margin: auto;
  z-index: 3;
`;
export const Search = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Arial, "Times New Roman", serif;
  position: relative;
  background: #fff;
  width: 120%;
  border-radius: 5px;
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.12);
  &:click {
    border-radius: 5px 5px 0 0;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

export const InputField = styled.input`
  height: 35px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0 60px 0 20px;
  font-size: 18px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  &:placeholder {
    color: grey;
    opacity: 0.4;
  }
  &:click {
    border-radius: 5px 5px 0 0;
  }
`;
export const Icon = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  height: 30px;
  width: 30px;
  font-size: 20px;
  color: #644bff;
  cursor: pointer;
  &:click {
    border-radius: 5px 5px 0 0;
    padding: 10px 8px;
    opacity: 1;
    pointer-events: auto;
  }
`;
export const InputIcon = styled(FaSearch)``;
export const SearchResultsBox = styled.div`
  padding: 10px 8px;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
`;

export const SearchResult = styled.li`
  list-style: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: default;
  border-radius: 3px;
  &:hover {
    background-color: #efefef;
    transition: all 0.3s ease;
  }
`;
export const TextResult = styled.span`
  font-size: 25px;
  text-transform: capitalize;
  height: 20px;
  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }
`;

export const ImgResult = styled.img`
  -o-object-fit: cover;
  object-fit: cover;
`;

export const Button = styled.button``;

export const NavAvatar = styled.div`
  border-bottom: 2px solid transparent;

  display: inline-flex;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 10;
  width: ${(props) => (props.width ? props.width : "50px")};
  margin-left: 20px;
  @media screen and (max-width: 1024px) {
    width: 50px;
    margin-left: 0px;
    margin-right: 25px;
    &:hover {
      border: none;
    }
  }
`;

export const UserAvatar = styled(Avatar)`
  alt: ${(props) => (props.alt ? props.alt : null)};
  src: ${(props) => (props.src ? props.alt : "C:/Users/JK/Desktop/2.png")};

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  @media screen and (max-width: 1024px) {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const AvatarListItem = styled.ul`
  list-style: none;
  background-color: black;
  border-radius: 5px;
  position: absolute;
  top: 65px;
  right: 10px;
  cursor: default;
  width: 220%;
  &:hover .UserAvatar {
    visibility: true;
  }
  @media screen and (max-width: 1024px) {
    right: 0px;
    width: 250%;
  }
`;

export const AvatarBtn = styled.button`
  outline: none;
  border: 0;
  background: none;
  height: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:focus {
    border: 0;
    outline: none;
  }
  &:hover {
    color: #4b59f7;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size: 0.8em;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;
