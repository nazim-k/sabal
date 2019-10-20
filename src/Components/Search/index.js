import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FixedDivision, Input, SearchIcon, CloseIcon } from './Styled';
import { FlexBox, Paragraph } from 'Components/StyledComponents';
import { Table } from 'Components/Common';
import CONFIG from 'CONFIG';

const { header } = CONFIG.table.compnaies;
const { placeholder, icon, label, infoMsg } = CONFIG.search;

function Search({ companies, links, query, setQuery, toggleSearchVisibility, isLoading, failError }) {
  const searchInput = React.createRef();

  useEffect(() => {
    searchInput.current.focus();
  }, [ searchInput ]);

  return <FixedDivision>

    <FlexBox width="60%" margin="auto" minWidth="700px" >

      <FlexBox row height="auto" borderBottom="1px solid #6a6a6a">
        <Input ref={ searchInput } placeholder={ placeholder } value={ query } onChange={ setQuery }/>
        <SearchIcon src={ icon } alt="search"/>
      </FlexBox>

      <FlexBox row height="auto" between margin="0 0 15px">
        <Paragraph green >{ label }</Paragraph>
        <Paragraph gray>{ infoMsg }</Paragraph>
      </FlexBox>

      <FlexBox as="section" row height="auto" between margin="0 0 15px">
        <Paragraph gray margin="0" padding="0">
          {
            isLoading
              ? 'Searching...'
              : query
              ? `Results: ${ companies.length }`
              : failError
              ? 'Error'
              : ''
          }
        </Paragraph>
      </FlexBox>

      {
        companies.length && <Table
          header={ header }
          dark
          rows={ companies }
          links={ links }
          isLoading={ isLoading }
          onRowClick={ toggleSearchVisibility }
        />
      }

    </FlexBox>

    <CloseIcon
      src="/icons/close.svg"
      alt="close"
      onClick={ () => {
        toggleSearchVisibility();
        setQuery('')
      }}
    />

  </FixedDivision>

}

Search.defaultProps = {
  companies: [],
  links: [],
  query: '',
  isLoading: false,
  failError: null
};

Search.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.array).isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  toggleSearchVisibility: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  failError: PropTypes.oneOfType([
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]).isRequired,
    PropTypes.oneOf([null])
  ])
};

export default Search;