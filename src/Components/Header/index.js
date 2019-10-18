import React from 'react';
import PropTypes from 'prop-types';
import { AppName, Link, Search } from './Styled';
import { LinkWrapper, FlexBox } from "Components/StyledComponents";
import CONFIG from 'CONFIG';

const { appName, navLinks, activeLinkStyle, searchIcon, height, fontSize, sideIndentation } = CONFIG.header;
const links = Object.entries(navLinks);

function Header({ openSearch }) {

  return <FlexBox as="header" row bg="#1a202c" height={ `${ height }vh` } middle color="#f7fafc" between>

    <AppName>
      <LinkWrapper to="/" theme="light">{ appName }</LinkWrapper>
    </AppName>

    <FlexBox as="nav" row width="auto" evenly middle padding={ `0 ${ sideIndentation }` }>
      {
        links.map( ([text, link]) => (
          <Link key={ text } exact to={ link } activeStyle={ activeLinkStyle }>
            { text }
          </Link>
        ))
      }
      <FlexBox row fontSize={ fontSize } color="#f7fafc" as="figure" height="auto" width="auto" margin="0" middle cursor="pointer" onClick={ openSearch }>
        <figcaption>Search</figcaption>
        <Search src={ searchIcon } alt="search"/>
      </FlexBox>
    </FlexBox>

  </FlexBox>

}

Header.propTypes = {
  openSearch: PropTypes.func.isRequired
};

export default Header;