import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { SkeletonDiv } from './Styled';

export default function TextSkeleton({ loadingHeight, loadingWidth, ...props }) {

  return <SkeletonDiv height={ loadingHeight } width={ loadingWidth }>
    <Skeleton { ...props }/>
  </SkeletonDiv>

}