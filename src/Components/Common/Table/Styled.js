import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${ props => props.theme.fontColor };
`;

export const StyledTr = styled.tr`
  background-color: ${ props => props.theme.bg };
  ${
  props => props.theme.hover && `&:hover {
      cursor: pointer;
      color: #1a202c;
      background-color: #e2e8f0;
    }`
  }
`;

export const StyledTd = styled.td`
  text-align: ${ props => props.left ? 'left' : 'right' };
  padding: ${ props => props.theme.padding || '10px' };
  border-bottom: 1px solid rgb(229, 229, 229);
`;