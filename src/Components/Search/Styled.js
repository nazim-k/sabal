import styled from 'styled-components';
import {FlexRow} from "../Styled";

export const ComponentContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(32, 32, 32, 0.98);
  padding: 12vh 0 50px;
  box-sizing: border-box;
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

export const InputContainer = styled(FlexRow)`
  height: auto;
  border-bottom: 1px solid #6a6a6a;
`;

export const SearchIcon = styled.img`
  padding-right: 15px;
  height: 100%;
`;

export const ResultsDiv = styled.div`
  width: 100%;
  padding: 10px 0;
  height: 100%;
  overflow-y: auto;
  border-top: 1px solid #6a6a6a;
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