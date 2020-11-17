import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>ToDo</h1>
      <nav> 
        <Link className="navItem" to={'/'}>Home</Link>
        <Link className="navItem" to={'/todos'}>Todos</Link>
      </nav>
    </header>
  );
};

export default Header;