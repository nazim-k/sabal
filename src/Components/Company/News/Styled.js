import styled, { keyframes } from 'styled-components';
import { OverflowDivision } from 'Components/StyledComponents'

export const NewsRow = styled.a`
  width: 100%;
  height: auto;
  display: block;
  text-decoration: none;
  color: #1a202c;
  border-bottom: 1px solid #a0aec0;
`;

export const StickyDivision = styled(OverflowDivision)`
  position: sticky;
  right: 0;
  top: 0;
`;


const dualRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  margin: 35px auto;
  width: 64px;
  height: 64px;
  &:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #4a5568;
    border-color: #4a5568 transparent #4a5568 transparent;
    animation: ${ dualRing } 1.2s linear infinite;
  }
`;