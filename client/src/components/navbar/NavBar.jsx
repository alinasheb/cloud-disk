import React from "react";
import "./navbar.css";
import navbar_logo from "../assets/img/navbar_logo.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redusers/userReducer";

const NavBar = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="container">
        <img src={navbar_logo} alt="Логотип" className="navbar__logo" />
        <div className="navbar__header">MERN CLOUD</div>
        {!isAuth && <div className="navbar__login"><NavLink to="/login">Войти</NavLink></div>}
        {!isAuth && <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div>}
        {isAuth && <div className="navbar__login" onClick={() => dispatch(logout())}>Выход</div>}
      </div>
    </div>
  );
};

export default NavBar;
