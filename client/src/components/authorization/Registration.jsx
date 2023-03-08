import React, { useState } from "react";
import './authorization.css';
import Input from "../utils/input/Input";
import { registration } from "../../actions/user";



const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="authorization">
      <div className="authorization__header">Регистрация</div>
      <Input type="text" value = {email} setValue={setEmail} placeholder="Введите email..."/>
      <Input type="password" value = {password} setValue={setPassword} placeholder="Введите пароль..."/>
      <button className="authorization__btn" onClick={() => registration(email, password)}>Зарегистрироваться</button>
    </div>
  )
}

export default Registration;