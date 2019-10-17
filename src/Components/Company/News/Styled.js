import styled, { keyframes } from "styled-components";

export const Headline = styled.h4`
  text-align: center;
`;

export const Summany = styled.p`
  text-align: left;
  margin: 0;
`;

export const PublicationDate = styled.time`
  text-align: right;
  font-size: .8em;
  margin-top: 5px;
`;

export const ScrollDivision = styled.section`
  height: 140vh;
  width: 50%;
  padding: 0 20px 40px;
  box-sizing: border-box;
  overflow-y: scroll;
`;

export const NewsRow = styled.a`
  width: 100%;
  height: auto;
  display: block;
  text-decoration: none;
  color: #1a202c;
  border-bottom: 1px solid #a0aec0;
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