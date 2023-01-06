import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { i18n } from '../constants/i18n-ES';
import { AuthContext } from '../context/AuthContext';

export const Header = () => {
  const {} = useContext(AuthContext);
  return (
    <header className="header">
        <h1 className="header__title"><Link to="/"> {i18n.title}</Link></h1>
    </header>
  )
}