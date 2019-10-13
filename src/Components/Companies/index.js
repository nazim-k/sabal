import React from 'react';
import { FlexRow, FlexColumn, Table, Title } from '../Styled';
import { transformArrayOfObjectsToRows } from '../../helpers';

const companies = [
  {
    "id": "com_2zvNzA",
    "ticker": "XOM",
    "name": "Exxon Mobil Corp",
    "lei": "J3WHBG0MTS7O8ZVMDC91",
    "cik": "0000034088"
  },
  {
    "id": "com_DzonXe",
    "ticker": "CVX",
    "name": "Chevron Corp",
    "lei": null,
    "cik": "0000093410"
  },
  {
    "id": "com_Qz8bgb",
    "ticker": "SLB",
    "name": "Schlumberger NV",
    "lei": null,
    "cik": "0000087347"
  },
  {
    "id": "com_2z9lXV",
    "ticker": "COP",
    "name": "ConocoPhillips",
    "lei": "WPTL2Z3FIYTHSP5V2253",
    "cik": "0001163165"
  },
  {
    "id": "com_xgQ9gb",
    "ticker": "OXY",
    "name": "Occidental Petroleum Corp",
    "lei": "IM7X0T3ECJW4C1T7ON55",
    "cik": "0000797468"
  },
  {
    "id": "com_pgVb6g",
    "ticker": "CHK",
    "name": "Chesapeake Energy Corp",
    "lei": "X2MT1W32SPAZ9WSKLE78",
    "cik": "0000895126"
  },
  {
    "id": "com_BgkpOX",
    "ticker": "EPD",
    "name": "Enterprise Products Partners LP",
    "lei": "K4CDIF4M54DJZ6TB4Q48",
    "cik": "0001061219"
  },
  {
    "id": "com_ogDk5y",
    "ticker": "HCLP",
    "name": "Hi Crush Partners LP",
    "lei": null,
    "cik": "0001549848"
  },
  {
    "id": "com_qgeoNz",
    "ticker": "DDpA",
    "name": "E I du Pont de Nemours and Co",
    "lei": "GLU7INWNWH88J9XBXD45",
    "cik": "0000030554"
  },
  {
    "id": "com_Kz59Nz",
    "ticker": "MON",
    "name": "Monsanto Co",
    "lei": "NONUZEX43GHIPSVDD938",
    "cik": "0001110783"
  }
];

const keyToRender = [ 'name', 'ticker', 'lei' ];
const headers = [ 'Company\'s common name', 'Stock market ticker', 'Legal Entity Identifier' ];

function Companies() {
  const { result: rows, links } = transformArrayOfObjectsToRows({ data: companies, keys: keyToRender, link: 'ticker' });
  return <FlexRow>
    <FlexColumn width="80%">
      <Title>All Companies</Title>
      <Table headers={ headers } rows={ rows } links={ links }/>
    </FlexColumn>
  </FlexRow>

}

export default Companies;