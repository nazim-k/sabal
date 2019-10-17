import React from 'react';
import {
  ComponentContainer,
  Input,
  InputContainer,
  SearchIcon,
  CloseIcon
} from './Styled';
import { FlexColumn, FlexRow, Paragraph } from '../CommonStyled';
import { Table } from '../CommonStyled';
import { companiesTable } from '../../CONFIG';

const { header } = companiesTable;


function Search({ companies, links, query, setQuery, closeSearch, isLoading, failError }) {

  return <ComponentContainer>

    <FlexColumn width="60%" margin="auto" style={{ minWidth: '700px'  }}>

      <InputContainer>
        <Input placeholder="Enter a symbol or a keyword" value={ query } onChange={ setQuery }/>
        <SearchIcon src="/icons/search-green.svg" alt="search"/>
      </InputContainer>

      <FlexRow height="auto" between margin="0 0 15px">
        <Paragraph green >Search</Paragraph>
        <Paragraph gray>Submit entry for keyword result</Paragraph>
      </FlexRow>

      <FlexRow height="auto" between margin="0 0 15px">
        <Paragraph gray margin="0" padding="0">
          {
            isLoading
              ? 'Searching...'
              : companies.length
              ? `Results: ${ companies.length }`
              : failError
              ? 'Error'
              : ''
          }
        </Paragraph>
      </FlexRow>

      {
        companies.length && <Table
          header={ header }
          dark
          rows={ companies }
          links={ links }
          isLoading={ isLoading }
          onRowClick={ closeSearch }
        />
      }

    </FlexColumn>

    <CloseIcon
      src="/icons/close.svg"
      alt="close"
      onClick={ () => {
        closeSearch();
        setQuery('')
      }}
    />

  </ComponentContainer>

}

Search.defaultProps = {
  isLoading: false,
};

export default Search;