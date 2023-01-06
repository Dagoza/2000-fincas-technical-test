import React from 'react'
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

const Layout = ({children}) => (
    <div className="main">
      <Header />
        {children}
      <Footer />
    </div>
  )
export default Layout;