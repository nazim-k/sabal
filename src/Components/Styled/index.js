import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StyledTable from './Table';

const Flex = styled.div`
  display: flex;
  color: ${ props => props.color || '#1a202c' }
  width: ${ props => props.width || '100%' };
  height: ${ props => props.height || '100%' };
  flex-wrap: ${ props => props.wrapRow ? 'wrap':'nowrap' };
  box-sizing: border-box;
  margin: ${ props => props.margin };
  padding: ${ props => props.padding };
  background-color: ${ props => props.bg };
`;

export const FlexRow = styled(Flex)`
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
`;

export const FlexColumn = styled(Flex)`
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
  color: ${ props => props.light ? '#f7fafc' : '#1a202c' }
`;

export const Table = StyledTable;

export const Paragraph = styled.p`
  color: ${ props => {
    if (props.light) return '#f7fafc';
    if (props.green) return '#4db74d';
    if (props.gray) return '#6a6a6a';
    if (props.red) return '#e53e3e';
    if (props.color) return props.color;
    return '#1a202c'
  }};
  padding: ${ props => props.padding };
  margin: ${ props => props.margin };  
`;

const SkeletonDiv = styled.div`
  width: ${ props => props.width || '80%' };
  height: ${ props => props.height || 'auto' };
`;

export function TextSkeleton({ divHeight, ...props }) {

  return <SkeletonDiv height={ divHeight }>
    <Skeleton { ...props }/>
  </SkeletonDiv>

}




