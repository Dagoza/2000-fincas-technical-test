import React from "react";
import { Toaster } from "react-hot-toast";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./styles/Layout.css";

const Layout = ({ children }) => (
  <div className="main">
    <div>
      <Toaster />
    </div>
    <Header />
    {children}
    <Footer />
  </div>
);
export default Layout;
