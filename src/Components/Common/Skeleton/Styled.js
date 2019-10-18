import styled from "styled-components";

export const SkeletonDiv = styled.div`
  width: ${ props => props.width || '80%' };
  height: ${ props => props.height || 'auto' };
`;