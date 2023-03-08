import React, { useState } from "react";
import './authorization.css';
import Input from "../utils/input/Input";
import { login } from "../../actions/user";
import {useDispatch} from 'react-redux';




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="authorization">
      <div className="authorization__header">Авторизация</div>
      <Input type="text" value = {email} setValue={setEmail} placeholder="Введите email..."/>
      <Input type="password" value = {password} setValue={setPassword} placeholder="Введите пароль..."/>
      <button className="authorization__btn" onClick={() => dispatch(login(email, password))} >Войти</button>
    </div>
  )
}


export default Login;