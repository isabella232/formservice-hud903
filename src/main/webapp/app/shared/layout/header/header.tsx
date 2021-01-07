import './header.scss';
import React, { useState } from 'react';
import { Navbar, Nav, NavbarToggler, Collapse } from 'reactstrap';
import { Home, Brand } from './header-components';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div id="app-header">
      <Navbar dark expand="sm" fixed="top" className="jh-navbar">
        <NavbarToggler aria-label="Menu" onClick={toggleMenu} />
        <Brand />
        <Collapse isOpen={menuOpen} navbar>
          <Nav id="header-tabs" className="ml-auto" navbar>
            <Home />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
