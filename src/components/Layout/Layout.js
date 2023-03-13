import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../index";

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
export default Layout;
