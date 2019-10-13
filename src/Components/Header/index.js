import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FlexRow } from "../Styled";

const headerIndentation = '5%';

const ApplicatoinTitle = styled.p`
  font-family: 'Big Shoulders Text';
  font-size: 3em;
  padding-left: ${headerIndentation};
  margin: 0;
`;

const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: #f7fafc;
  padding: 0 10px;
`;

const activeLinkStyle = {
  borderBottom: '1px solid #4db74d',
  color: '#4db74d'
};

function Header({ height }) {

  return <FlexRow bg="#1a202c" height="10vh" middle color="#f7fafc" between>
    <ApplicatoinTitle>Sabal</ApplicatoinTitle>
    <FlexRow middle evenly width="30%" padding={ `0 ${headerIndentation}` }>
      <HeaderLink exact to="/" activeStyle={ activeLinkStyle }>Home</HeaderLink>
      <HeaderLink exact to="/companies" activeStyle={ activeLinkStyle }>Companies</HeaderLink>
      <HeaderLink exact to="/search" activeStyle={ activeLinkStyle }>
        <img src="/icons/search.svg" alt="search"/>
      </HeaderLink>
    </FlexRow>
  </FlexRow>

}

export default Header;