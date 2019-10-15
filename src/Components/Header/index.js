import React from 'react';
import { ApplicatoinTitle, HeaderLink, activeLinkStyle, Nav, Search } from './Styled';
import { FlexRow, LinkWrapper } from "../CommonStyled";
import PropTypes from 'prop-types';

function Header({ openSearch }) {

  return <FlexRow bg="#1a202c" height="10vh" middle color="#f7fafc" between>

    <ApplicatoinTitle>
      <LinkWrapper to="/" theme="light">Sabal</LinkWrapper>
    </ApplicatoinTitle>

    <Nav>
      <HeaderLink exact to="/" activeStyle={ activeLinkStyle }>Home</HeaderLink>
      <HeaderLink exact to="/companies" activeStyle={ activeLinkStyle }>Companies</HeaderLink>
      <Search src="/icons/search.svg" alt="search" onClick={ openSearch }/>
    </Nav>

  </FlexRow>

}

Header.propTypes = {
  openSearch: PropTypes.func.isRequired
};

export default Header;