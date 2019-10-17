import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FlexColumn, FlexRow, Title } from '../CommonStyled';
import News from './News';
import { CompanyInfoContainer, CompanyCommentFormContainer, CompanyCommentsContainer, CompnayNewsContainer } from '../../Containers';

const NewsContainer = styled.section`
  height: 140vh;
  width: 50%;
  padding: 0 20px 40px;
  box-sizing: border-box;
  overflow-y: scroll;
`;


function Company(props) {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  const { company } = props.match.params;

  return <FlexRow height="auto" wrapRow>
    <FlexColumn key="companyInfo" between width="50%" padding="0 0 25px">

      <CompanyInfoContainer ticker={ company }/>
      <CompanyCommentsContainer ticker={ company }/>
      <CompanyCommentFormContainer ticker={ company }/>

    </FlexColumn>

    <CompnayNewsContainer ticker={ company }/>


  </FlexRow>
}

export default Company;