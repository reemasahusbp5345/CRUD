import React from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { logoutUser } from "../Redux/action";
import Login from "./Login";
import Register from "./Register";

const NavbarWrapper = styled.header`
  width: 50%;
  height:60px;
  padding-left: 50%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  font-size:20px;
  align-items: center;
  cursor:pointer;
  justify-content: space-around;
  h1{
    position:absolute;
    left:0;
    margin-left:20px;
    color:#1749d2;
  }

  a {
    text-decoration: none;
     margin:0px 100px;
  }
  .login{
      display:flex;
      position:absolute;
      right:0;
      margin-right:30px;
      color:#1749d2;
  }
  @media all and (max-width:600px){
    *{
        width:50%;
    }
    a{
      margin-left:-50px;
    }
    h1{
      margin-left:-50px;
    }
    .login{
      dispaly:flex;
      margin-right:-30px;
    }
}
`;

export const Navbar = () => {
    const isAuth=useSelector(state=>state.isAuth)
    const username=useSelector(state=>state.username)
    const dispatch=useDispatch()
    const handleLogout=()=>{
      dispatch(logoutUser())
    }
    console.log(isAuth)
  return (
    <NavbarWrapper>
        <h1>REFIER</h1>
         <NavLink to="/">Home</NavLink>
        <NavLink to="/admin">Admin</NavLink>
        {isAuth ? 
        <Dropdown className="login">
  <Dropdown.Toggle variant="primary" id="dropdown-basic">
   Hi, {username}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item  onClick={handleLogout}>Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
         : <div className="login"><span><Login/></span> / <span><Register/></span></div>}
    </NavbarWrapper>
  );
};
