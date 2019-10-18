import styled from 'styled-components';

export const FixedDivision = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(32, 32, 32, 0.98);
  padding: 12vh 0 50px;
  box-sizing: border-box;
  z-index: 100;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  font-size: 1.5rem;
  padding: 15px;
  color: #f7fafc;
`;

export const SearchIcon = styled.img`
  padding-right: 15px;
  height: 100%;
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;