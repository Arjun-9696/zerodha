import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import Zerodha from '../../Images/logo.png';
import { Box, Image, Heading, Button, useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Auth/actions';
const activeStyle = {
  fontWeight: 'bold',
  color: '#1762c4',
};

const style = {
  textDecoration: 'none',
  color: 'rgb(133, 133, 133)',
  flex: 1,
};

const Nav = styled.div`
  position: fixed;
  z-index: 1;
  background: white;
  top: 0px;
  left: 0;
  height: 70px;
  border-bottom: 1px solid rgb(226, 224, 224);
  width: 100%;
`;

const FlexBox = styled.div`
  display: flex;
  & > * {
    flex: 1;
  }
`;

const InnerContent = styled.div`
  padding: 20px 0px;
  font-size: 15px;
  font-weight: 400;

  :hover {
    color: #1762c4;
  }
`;

const Logo = styled.img`
  width: 130px;
`;

const Bar = styled.div`
  background: black;
  height: 2px;
  width: 20px;
  margin: 4px;
`;

const SecondFlex = styled.div`
  flex: 1;
  display: flex;
  width: 700px;
  margin-right: 145px;
`;

const Menu = styled.div`
  padding: 23px 0px;
  text-decoration: none;
  color: rgb(133, 133, 133);
  margin-left: 25px;
  :hover {
    cursor: pointer;
  }
`;

const Navbar = () => {
  let isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const toast = useToast();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    toast({
      title: 'Log Out Successful 👋',
      description: 'Visit again 🙏',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top',
    });
  };
  return (
    <div>
      <Nav>
        <FlexBox>
          <Heading padding="15px" marginLeft="100px">
            ZERODHA
          </Heading>
          <SecondFlex>
            <NavLink style={style} activeStyle={activeStyle} to="/tutorial">
              <InnerContent>Tutorial</InnerContent>
            </NavLink>

            <NavLink style={style} activeStyle={activeStyle} to="/about">
              <InnerContent>About</InnerContent>
            </NavLink>

            <NavLink style={style} activeStyle={activeStyle} to="/">
              <InnerContent>Products</InnerContent>
            </NavLink>

            <NavLink style={style} activeStyle={activeStyle} to="/pricing">
              <InnerContent>Pricing</InnerContent>
            </NavLink>

            <NavLink style={style} activeStyle={activeStyle} to="/">
              <InnerContent>Support</InnerContent>
            </NavLink>

            <Box margin="20px">
              {isAuth ? (
                <Button colorScheme="blue" onClick={logoutHandler}>
                  Sign Out
                </Button>
              ) : (
                <NavLink to="/signin">
                  <Button colorScheme="blue">Sign In</Button>
                </NavLink>
              )}
            </Box>
          </SecondFlex>
        </FlexBox>
      </Nav>
    </div>
  );
};
export default Navbar;
