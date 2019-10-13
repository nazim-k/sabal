import styled from 'styled-components';

const styleComponent = Component => styled(Component)`
    outline: none;
    color: #1a202c;
    border-radius: 3px;
    padding: 7px 15px;
    width: 100%;
    font-size: 1rem;
    margin-bottom: 10px;
    box-sizing: border-box;
    box-shadow: 0 3px 8px #a0aec0;
  `;

export const Input = styleComponent(styled.input`
  border: none;
`);

export const TextArea = styleComponent(styleComponent(styled.textarea`
  height: 100px;
  border: none;
`));

export const Button = styleComponent(styled.button`
  background-color: #68d391;
  height: 50px;
  &:active {
    background-color: #38a169;
    outline: none;
    box-shadow: none;
  }
`);