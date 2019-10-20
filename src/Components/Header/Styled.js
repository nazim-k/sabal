import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CONFIG from 'CONFIG.js';

const { fontSize, sideIndentation } = CONFIG.header;

export const AppName = styled.h1`
  font-family: 'Big Shoulders Text';
  font-size: 3em;
  padding-left: ${ sideIndentation };
  margin: 0;
`;

export const Link = styled(NavLink)`
  font-size: ${ fontSize };
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f7fafc;
  padding: 0 10px;
  margin: 6px;
`;

export const Search = styled.img`
  cursor: pointer;
  padding: 0 10px;
  height: 3.1rem;
`;