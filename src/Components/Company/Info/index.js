import React from 'react';
import  ErrorMessage from '../../ErrorMessage'
import { FlexSection, Table, Title } from '../../CommonStyled';


function CompanyInfo({ company, summary, details, isLoading, failError }) {

  if (failError) return <ErrorMessage error={ failError } center/>;

  return <FlexSection height="auto" padding="0 20px" center>
    <Title>Company Information</Title>
    <Table rows={ company } padding="5px" isLoading={ isLoading } loadingWidth="100%"/>
    <details>
      <summary style={{ outline: 'none', paddingTop: '15px' }}>
        { summary }
      </summary>
      <p>{ details }</p>
    </details>
  </FlexSection>

}

export default CompanyInfo