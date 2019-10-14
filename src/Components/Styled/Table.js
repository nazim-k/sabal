import React from 'react';
import styled from 'styled-components';
import { TextSkeleton } from './index'
import { withRouter } from "react-router-dom";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const StyledTr = styled.tr`
  ${
  props => props.hover && `&:hover {
      cursor: pointer;
      background-color: #e2e8f0;
    }`
  }
`;
const StyledTh = styled.th`
  text-align: ${ props => props.left ? 'left' : 'right' };
  padding: ${ props => props.padding || '15px 10px' };
  border-bottom: 1px solid rgb(229, 229, 229);
`;
const StyledTd = styled.td`
  text-align: ${ props => props.left ? 'left' : 'right' };
  padding: ${ props => props.padding || '10px' };
  border-bottom: 1px solid rgb(229, 229, 229);
`;

function Table({ headers, rows, links, padding, hover=true, history, isLoading=false }) {

  //TODO: find better way to link table row to company ticker;

  function handleRowClick (ticker) {
    if (hover) history.push(`/companies/${ticker}`);
  }
  if (isLoading) return rows.map( (row, index) => <TextSkeleton key={ index }/> );
  return <StyledTable>
    {
      headers && <thead>
      <tr>
        { headers.map( (header, index) => <StyledTh key={ index } left={ !index }>{ header }</StyledTh> ) }
      </tr>
      </thead>
    }
    <tbody>
      {
        rows.map( (row, index)=> (
          <StyledTr key={ index } hover={ hover } onClick={ () => links && handleRowClick( links[index] ) }>
            { row.map( (d, index) => ( <StyledTd key={ index } left={ !index } padding={ padding }>{ d }</StyledTd> ))}
          </StyledTr>
        ))
      }
    </tbody>
  </StyledTable>

}

export default withRouter(Table);