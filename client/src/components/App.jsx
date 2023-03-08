import React, { useEffect } from "react";
import NavBar from "./navbar/NavBar";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../actions/user";

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
}, [])

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <div className="wrap">
          {!isAuth &&
            <Routes>
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          }
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
