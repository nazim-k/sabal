import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { Button } from './Styled';
import { ErrorMessage, Table } from 'Components/Common';
import { FlexBox, OverflowDivision, Title, Paragraph } from 'Components/StyledComponents';
import CONFIG from 'CONFIG';

const { header } = CONFIG.table.compnaies;
const height= 100 - CONFIG.header.height;
const { title, style, prevButton, nextButton } = CONFIG.companies;

function Companies({ companies, links, currentPageIndex, nextPage, nextCompaniesPage, prevCompaniesPage, isLoading, failError }) {

  if (failError) return <ErrorMessage error={ failError } center/>;

  return <FlexBox as="section" height={ `${ height }vh` } { ...style }>
    <Title>{ title }</Title>
    <OverflowDivision>
      {
        isLoading
          ? <Skeleton count={ 30 } width="100%"/>
          : <Table
            header={ header }
            rows={ companies }
            links={ links }
            isLoading={ isLoading }
          />
      }
    </OverflowDivision>
    <FlexBox row around height="auto" padding="20px" margin="25px 0 0">
      <Button onClick={ prevCompaniesPage } disabled={ currentPageIndex === 0 }>{ prevButton }</Button>
      <Paragraph>{ currentPageIndex + 1 }</Paragraph>
      <Button onClick={ nextCompaniesPage } disabled={ !nextPage }>{ nextButton }</Button>
    </FlexBox>
  </FlexBox>

}

Companies.defaultProps = {
  companies: [],
  links: [],
  currentPageIndex: 0,
  nextPage: null,
  isLoading: true,
  failError: null,
};

Companies.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.array).isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentPageIndex: PropTypes.number.isRequired,
  nextPage: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired
  ]),
  nextCompaniesPage: PropTypes.func.isRequired,
  prevCompaniesPage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  failError: PropTypes.oneOfType([
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]).isRequired,
    PropTypes.oneOf([null])
  ])
};

export default Companies;