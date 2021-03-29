import React, { useState, useEffect, useRef, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import genres from "P:/TruyenTranh9x/truyen-tranh-9x/src/json/genres.json";
import { useHistory } from "react-router";
import { UserContext } from "../../UserContext";

import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavItemBtn,
  NavBtnLink,
  Wrapper,
  Search,
  InputField,
  SearchResultsBox,
  SearchResult,
  Icon,
  InputIcon,
  TextResult,
  ImgResult,
  DdList,
  DdListItem,
  NavAvatar,
  UserAvatar,
  AvatarListItem,
  AvatarBtn,
  TableList,
} from "./NavBar.elements";
// not use yet
function readJson() {
  fetch("../../MOCK_DATA.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then((json) => {
      this.users = json;
      //console.log(this.users);
    })
    .catch(function () {
      this.dataError = true;
    });
} //example

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

const NavBar = () => {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);

  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  const [displaySB, setdisplaySB] = useState(false);
  const [displayYM, setdisplayYM] = useState(false);
  const [displayG, setdisplayG] = useState(false);
  const [displayA, setdisplayA] = useState(false);

  const [isHoverYM, setHoverYM] = useState(false);
  const [isHoverG, setHoverG] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const [height, width] = useWindowSize();
  const items = [
    {
      id: 1,
      value: "Truyện 10x",
      link: "/Search/Truyen-10x",
    },
    {
      id: 2,
      value: "Truyện 9x",
      link: "/Search/Truyen-9x",
    },
    {
      id: 3,
      value: "Truyện 8x",
      link: "/Search/Truyen-8x",
    },
  ];

  useEffect(() => {
    const title = [];
    const promises = new Array(10)
      .fill()
      .map((val, i) =>
        fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`)
      );
    Promise.all(promises).then((titleArr) => {
      return titleArr.map((res) =>
        res.json().then(({ name, sprites: { front_default: sprite } }) => {
          return title.push({ name, sprite });
        })
      );
    });
    setOptions(title);
  }, []);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setdisplaySB(false);
      setdisplayYM(false);
      setdisplayG(false);
      setdisplayA(false);
    }
  };

  const showButton = () => {
    if (window.innerWidth <= 1024) {
      setButton(false);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  const setSelectedTitle = (title) => {
    setSearch(title);
    history.push("/Search/" + title);
    setdisplaySB(false);
    setSearch("");
  };
  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav ref={wrapperRef}>
          <NavBarContainer>
            <NavLogo to="/">
              <NavIcon />
              Manga Cổ Đại
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <Wrapper>
              <Search>
                <InputField
                  placeholder="Tìm Kiếm"
                  value={search}
                  onClick={() => setdisplaySB(!displaySB)}
                  onChange={(event) => setSearch(event.target.value)}
                />
                {displaySB && (
                  <SearchResultsBox>
                    {options
                      .filter(
                        ({ name }) => name.indexOf(search.toLowerCase()) > -1
                      )
                      .map((v, i) => {
                        return (
                          <SearchResult
                            onClick={() => setSelectedTitle(v.name)}
                            key={i}
                          >
                            <TextResult>{v.name}</TextResult>
                            <ImgResult src={v.sprite} alt="pokemon" />
                          </SearchResult>
                        );
                      })}
                  </SearchResultsBox>
                )}
                <Icon>
                  <InputIcon
                    color="#644bff"
                    onClick={() => history.push("/Search/" + search)}
                  />
                </Icon>
              </Search>
            </Wrapper>
            <NavMenu click={click} width={!user ? "660px" : "550px"}>
              <NavItem width="220px">
                <NavLinks to="/">Trang Chủ</NavLinks>
              </NavItem>
              <NavItem
                width="220px"
                borderBottom="none"
                onClick={() => setdisplayG(!displayG)}
                onMouseEnter={() => setHoverG(true)}
                onMouseLeave={() => setHoverG(false)}
              >
                <NavBtn>Thể Loại</NavBtn>
                {(width > 1024 ? isHoverG : null) || displayG ? (
                  <DdList width="30%">
                    {genres.map((genre, index) => (
                      <DdListItem key={index}>
                        <NavLinks to={genre.value}>{genre.name}</NavLinks>
                      </DdListItem>
                    ))}
                  </DdList>
                ) : null}
              </NavItem>
              <NavItem
                width="290px"
                borderBottom="none"
                onClick={() => setdisplayYM(!displayYM)}
                onMouseEnter={() => setHoverYM(true)}
                onMouseLeave={() => setHoverYM(false)}
              >
                <NavBtn>Năm Xuất Bản</NavBtn>
                {console.log(width)}
                {(width > 1024 ? isHoverYM : null) || displayYM ? (
                  <DdList position="relative" top="-10px" overflowY="hidden">
                    {items.map((item) => (
                      <DdListItem key={item.id}>
                        <NavLinks to={item.link}>{item.value}</NavLinks>
                      </DdListItem>
                    ))}
                  </DdList>
                ) : null}
              </NavItem>
              {/* <NavItem>
                <NavLinks to="/download">Download</NavLinks>
              </NavItem> */}
              {user.username === "admin" ? (
                <NavItem width="80px">
                  <NavLinks to="/upload">Upload</NavLinks>
                </NavItem>
              ) : null}
              <NavItem width={user.username === "admin" ? "80px" : "100px"}>
                <NavLinks to="/contact">Contact</NavLinks>
              </NavItem>
              {!user ? (
                <NavItemBtn width="120px">
                  {button ? (
                    <NavBtnLink to="/login">
                      <Button primary>Đăng Nhập</Button>
                    </NavBtnLink>
                  ) : (
                    <NavBtnLink to="/login">
                      <Button fontBig primary>
                        Đăng Nhập
                      </Button>
                    </NavBtnLink>
                  )}
                </NavItemBtn>
              ) : null}
            </NavMenu>
            {user ? (
              <NavAvatar onClick={() => setdisplayA(!displayA)}>
                <UserAvatar src={user.imageUrl} alt={user.username} />
                {displayA && (
                  <AvatarListItem key="A1">
                    <AvatarBtn onClick={() => setUser("")}>Đăng Xuất</AvatarBtn>
                  </AvatarListItem>
                )}
              </NavAvatar>
            ) : null}
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
