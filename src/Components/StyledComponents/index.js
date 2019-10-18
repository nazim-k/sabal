import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const defaultDivisionBorder = '1px solid #a0aec0';

const commonContainerStyles = props => css`
  font-size: ${ props => props.fontSize };
  text-align: ${ props => props.textAlign };
  color: ${ props => props.color || '#1a202c' };
  width: ${ props => props.width || '100%' };
  height: ${ props => props.height || '100%' };
  min-width: ${ props => props.minWidth };
  min-height: ${ props => props.minHeight };
  max-width: ${ props => props.maxWidth };
  max-height: ${ props => props.maxHeight };
  box-sizing: border-box;
  margin: ${ props => props.margin };
  padding: ${ props => props.padding };
  background-color: ${ props => props.bg };
  border-top: ${ props => props.borderTop && defaultDivisionBorder };
  border-right: ${ props => props.borderRight && defaultDivisionBorder };
  border-bottom: ${ props => props.borderBottom && defaultDivisionBorder };
  border-left: ${ props => props.borderLeft && defaultDivisionBorder };
  cursor: ${ props => props.cursor };
  box-shadow: ${ props => props.boxShadow };
`;

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: ${ props => props.wrapRow ? 'wrap':'nowrap' };
  ${ commonContainerStyles };
  ${ props => props.row 
    ? css`
      justify-content: ${ props => {
        if (props.left) return 'flex-start';
        if (props.right) return 'flex-end';
        if (props.between) return 'space-between';
        if (props.around) return 'space-around';
        if (props.evenly) return 'space-evenly';
        return 'center'
      }};
      align-items: ${ props => {
        if (props.top) return 'flex-start';
        if (props.bottom) return 'flex-end';
        if (props.middle) return 'center';
        if (props.baseline) return 'baseline';
        return 'stretch'
      }};
    `
    : css`
      flex-direction: column
      align-items: ${ props => {
        if (props.left) return 'flex-start';
        if (props.right) return 'flex-end';
        if (props.center) return 'center';
        if (props.baseline) return 'baseline';
        return 'stretch';
      }};
      justify-content: ${ props => {
        if (props.top) return 'flex-start';
        if (props.bottom) return 'flex-end';
        if (props.middle) return 'center';
        if (props.between) return 'space-between';
        if (props.around) return 'space-around';
        if (props.evenly) return 'space-evenly';
      }};
    `
  };
`;

export const OverflowDivision = styled.div`
  overflow: auto;
  ${ commonContainerStyles }
`;

export const Title = styled.h2`
  font-weight: bold;
  text-align: center;
  padding: ${ props => props.padding }
  margin: ${ props => props.margin }
`;

export const LinkWrapper = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: ${ props => props.theme === 'light' ? '#f7fafc' : '#1a202c' }
`;

export const Paragraph = styled.p`
  font-size: ${ props => props.fontSize };
  color: ${ props => {
    if (props.light) return '#f7fafc';
    if (props.green) return '#4db74d';
    if (props.gray) return '#6a6a6a';
    if (props.red) return '#e53e3e';
    if (props.color) return props.color;
    return '#1a202c'
  }};
  text-align: ${ props => {
    if (props.center) return 'center';
    if (props.left) return 'left';
    if (props.right) return 'right';
  }};
  padding: ${ props => props.padding };
  margin: ${ props => props.margin };  
`;
