import React from 'react';
import PropTypes from 'prop-types';
import { Table, ErrorMessage } from 'Components/Common'
import { FlexBox, Title } from 'Components/StyledComponents';
import CONFIG from 'CONFIG';

const { title } = CONFIG.company.info;

function CompanyInfo({ company, summary, details, isLoading, failError }) {

  if (failError) return <ErrorMessage error={ failError } center/>;

  return <FlexBox as="section" height="auto" padding="0 20px" center>
    <Title>{ title }</Title>
    <Table
      rows={ company }
      padding="5px"
      isLoading={ isLoading }
      loadingWidth="100%"
    />
    {
      summary && <details>
        <summary style={{ outline: 'none', paddingTop: '15px' }}>
          { summary }
        </summary>
        <p>{ details }</p>
      </details>
    }
  </FlexBox>

}

CompanyInfo.defaultProps = {
  company: [],
  summary: '',
  details: '',
  isLoading: true,
  failError: null
};

CompanyInfo.propTypes = {
  company: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired
      ])
    )
  ),
  summary: PropTypes.string,
  details: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  failError: PropTypes.oneOfType([
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]).isRequired,
    PropTypes.oneOf([null])
  ])
};

export default CompanyInfo