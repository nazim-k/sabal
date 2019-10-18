import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1em;
  outline: none;
  width: 120px;
  height: 35px;
  border-radius: 3px;
  background-color: #f7fafc;
  box-shadow: 0 3px 8px #a0aec0;
  &:active {
    background-color: #e2e8f0;
    outline: none;
    box-shadow: none;
  }
`;