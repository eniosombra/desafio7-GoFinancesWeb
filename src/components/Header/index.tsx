import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

const styleHighlight = {
  borderBottom: '2px solid #ff872c',
  fontWeight: 600,
  opacity: 1,
};

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <NavLink to="/" exact activeStyle={styleHighlight}>
          Listagem
        </NavLink>
        <NavLink to="/import" activeStyle={styleHighlight}>
          Importar
        </NavLink>
      </nav>
    </header>
  </Container>
);

export default Header;
