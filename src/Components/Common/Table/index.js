import React from 'react';
import { ThemeProvider } from "styled-components";
import { getTheme, StyledTable, StyledTr, StyledTd } from './Styled';
import { TextSkeleton } from '../../CommonStyled/index'
import { withRouter } from "react-router-dom";


function Theader({ header }) {

  if (!header) return null;

  return (
    <thead>
      <tr>
        {
          header.map( (header, index) => (
            <StyledTd as="th" key={ index } left={ !index }>{ header }</StyledTd>
          ))
        }
      </tr>
    </thead>
  )

}

function Row({ row, onClick }) {

  return <StyledTr onClick={ onClick }>
    {
      row.map( (d, index) => (
        <StyledTd key={ index } left={ !index }>{ d }</StyledTd>
      ))
    }
  </StyledTr>

}

function Table({ header, rows, links, onRowClick, dark, padding, history, isLoading }) {

  function handleRowClick (ticker) {
    if (links) history.push(`/companies/${ticker}`);
    if (onRowClick) onRowClick();
  }

  if (isLoading) return rows.map( (row, index) => <TextSkeleton key={ index }/> );

  return <ThemeProvider theme={ getTheme(dark, !!links, padding) }>
    <StyledTable>
      <Theader header={ header }/>
      <tbody>
        {
          rows.map( (row, index)=> (
            <Row
              key={ index }
              row={ row }
              onClick={ () => links && handleRowClick( links[index] ) }
            />
          ))
        }
      </tbody>
    </StyledTable>
  </ThemeProvider>

}

Table.defaultProps = {
  rows: [],
  isLoading: false
};

export default withRouter(Table);