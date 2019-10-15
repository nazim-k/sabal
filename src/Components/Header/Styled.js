import {NavLink} from "react-router-dom";
import styled from "styled-components";

const headerIndentation = '5%';

export const ApplicatoinTitle = styled.h1`
  font-family: 'Big Shoulders Text';
  font-size: 3em;
  padding-left: ${headerIndentation};
  margin: 0;
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: #f7fafc;
  padding: 0 10px;
`;

export const Search = styled.img`
  cursor: pointer;
  padding: 0 10px;
`;

export const activeLinkStyle = {
  borderBottom: '1px solid #4db74d',
  color: '#4db74d'
};

export const Nav = styled.nav`
  display: flex;
  align-content: center;
  justify-content: evenly;
  padding: 0 ${headerIndentation};
`;