import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import ErrorMessage from '../ErrorMessage';
import { FlexSection, FlexRow, Table, Title } from '../CommonStyled';
import { companiesTable } from '../../CONFIG';

const { header } = companiesTable;

function Companies({ companies, links, isLoading, failError }) {

  if (failError) return <ErrorMessage error={ failError } center/>;

  return <FlexRow>
    <FlexSection width="80%">
      <Title>All Companies</Title>
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
    </FlexSection>
  </FlexRow>

}

Companies.defaultProps = {
  companies: [],
  links: [],
  failError: null,
  isLoading: true
};

Companies.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.array),
  links: PropTypes.arrayOf(PropTypes.string),
  isLoading: PropTypes.bool,
  failError: PropTypes.object,
};

export default Companies;