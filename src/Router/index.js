import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import List from "../Pages/List";
import Product from "../Pages/Product";
import Cart from "../Pages/Cart";
import Protected from "../Protected";
import { useState } from "react";

// Paths
export const Paths = {
  Login: "/Login",
  Signup: "/Signup",
  Home: "/Home",
  List: "/List",
  Product: "/Product",
  Cart: "/Cart",
  Profile: "/Profile",
  Message: "/Message",
  Order: "/Order",
};

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <Routes>
      <Route
        index
        element={<Login onLogin={handleLogin} isLoggedIn={isLoggedIn} />}
      />
      <Route path={Paths.Login} element={<Login />} />
      <Route path={Paths.Signup} element={<Signup />} />
      <Route
        path={Paths.Home}
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Home onLogout={handleLogout} /> 
          </Protected>
        }
      />
      <Route
        path={Paths.List}
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <List />
          </Protected>
        }
      />
      <Route
        path={`${Paths.Product}`}
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Product />
          </Protected>
        }
      />
      <Route
        path={`${Paths.Cart}`}
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Cart />
          </Protected>
        }
      />
      <Route path="*" element={<NotFound />} />
      {/* I haven't created pages for them (not required in this project) */}
      <Route path={`${Paths.Profile}`} element={<NotFound />} />
      <Route path={`${Paths.Message}`} element={<NotFound />} />
      <Route path={`${Paths.Order}`} element={<NotFound />} />
    </Routes>
  );
};

export default Router;
