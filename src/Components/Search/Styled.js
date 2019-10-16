import styled from 'styled-components';
import {FlexRow} from "../CommonStyled";

export const ComponentContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100%;
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

export const InputContainer = styled(FlexRow)`
  height: auto;
  border-bottom: 1px solid #6a6a6a;
`;

export const SearchIcon = styled.img`
  padding-right: 15px;
  height: 100%;
`;

export const ResultsDiv = styled.section`
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