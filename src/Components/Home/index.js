import React from 'react';
import { FlexRow, FlexColumn, Title } from "../Styled";
import Card from './Card';

// const stocks = ['IBM','Coca Cola','American Express','Facebook','Twitter','Apple','Netflix','Amazon','AT&T','Microsoft'];

const stockPrices = [
  {
    "date": "2019-09-05",
    "intraperiod": false,
    "frequency": "daily",
    "open": 71.64,
    "high": 73.71,
    "low": 71.64,
    "close": 73.52,
    "volume": 2997855,
    "adj_open": 71.64,
    "adj_high": 73.71,
    "adj_low": 71.64,
    "adj_close": 73.52,
    "adj_volume": 2997855,
    "security": {
      "id": "sec_NX6GzO",
      "company_id": "com_NXnP4y",
      "stock_exchange_id": "sxg_ozMr9y",
      "name": "Agilent Technologies Inc.",
      "code": "EQS",
      "currency": "USD",
      "ticker": "A",
      "composite_ticker": "A:US",
      "figi": "BBG000C2V541",
      "composite_figi": "BBG000C2V3D6",
      "share_class_figi": "BBG001SCTQY4"
    }
  },
  {
    "date": "2019-09-05",
    "intraperiod": false,
    "frequency": "daily",
    "open": 18.71,
    "high": 19.765,
    "low": 18.7,
    "close": 19.62,
    "volume": 5547247,
    "adj_open": 18.71,
    "adj_high": 19.765,
    "adj_low": 18.7,
    "adj_close": 19.62,
    "adj_volume": 5547247,
    "security": {
      "id": "sec_2zvNzA",
      "company_id": "com_jyRLMX",
      "stock_exchange_id": "sxg_ozMr9y",
      "name": "Alcoa Corp",
      "code": "EQS",
      "currency": "USD",
      "ticker": "AA",
      "composite_ticker": "AA:US",
      "figi": "BBG00B3T3HK5",
      "composite_figi": "BBG00B3T3HD3",
      "share_class_figi": "BBG00B3T3HF1"
    }
  },
  {
    "date": "2019-09-05",
    "intraperiod": false,
    "frequency": "daily",
    "open": 0.5613,
    "high": 0.62,
    "low": 0.5613,
    "close": 0.565,
    "volume": 79926,
    "adj_open": 0.5613,
    "adj_high": 0.62,
    "adj_low": 0.5613,
    "adj_close": 0.565,
    "adj_volume": 79926,
    "security": {
      "id": "sec_NgYGzd",
      "company_id": "com_Xnl4Ry",
      "stock_exchange_id": "sxg_ozMr9y",
      "name": "AAC Holdings Inc",
      "code": "EQS",
      "currency": "USD",
      "ticker": "AAC",
      "composite_ticker": "AAC:US",
      "figi": "BBG006T1NZ63",
      "composite_figi": "BBG006T1NZ18",
      "share_class_figi": "BBG006T1NZ27"
    }
  },
  {
    "date": "2019-09-05",
    "intraperiod": false,
    "frequency": "daily",
    "open": 50.14,
    "high": 50.14,
    "low": 49.83,
    "close": 49.96,
    "volume": 8535,
    "adj_open": 50.14,
    "adj_high": 50.14,
    "adj_low": 49.83,
    "adj_close": 49.96,
    "adj_volume": 8535,
    "security": {
      "id": "sec_NgPvzd",
      "company_id": null,
      "stock_exchange_id": "sxg_ozMr9y",
      "name": "AdvisorShares Dorsey Wright ADR ETF",
      "code": "ETF",
      "currency": "USD",
      "ticker": "AADR",
      "composite_ticker": "AADR:US",
      "figi": "BBG000BDYVZ4",
      "composite_figi": "BBG000BDYRW6",
      "share_class_figi": "BBG001T9B1Y4"
    }
  },
  {
    "date": "2019-09-05",
    "intraperiod": false,
    "frequency": "daily",
    "open": 27.45,
    "high": 28.11,
    "low": 27.44,
    "close": 27.69,
    "volume": 6256918,
    "adj_open": 27.45,
    "adj_high": 28.11,
    "adj_low": 27.44,
    "adj_close": 27.69,
    "adj_volume": 6256918,
    "security": {
      "id": "sec_dXOKXo",
      "company_id": "com_dXOpGz",
      "stock_exchange_id": "sxg_ozMr9y",
      "name": "American Airlines Group Inc",
      "code": "EQS",
      "currency": "USD",
      "ticker": "AAL",
      "composite_ticker": "AAL:US",
      "figi": "BBG005P7Q8V5",
      "composite_figi": "BBG005P7Q881",
      "share_class_figi": "BBG005P7Q907"
    }
  },
  {
    "date": "2019-09-05",
    "intraperiod": false,
    "frequency": "daily",
    "open": 10.7,
    "high": 10.955,
    "low": 10.7,
    "close": 10.7,
    "volume": 2014,
    "adj_open": 10.7,
    "adj_high": 10.955,
    "adj_low": 10.7,
    "adj_close": 10.7,
    "adj_volume": 2014,
    "security": {
      "id": "sec_DzonXe",
      "company_id": "com_gxMVMX",
      "stock_exchange_id": "sxg_ozMr9y",
      "name": "Altisource Asset Management Corp",
      "code": "EQS",
      "currency": "USD",
      "ticker": "AAMC",
      "composite_ticker": "AAMC:US",
      "figi": "BBG003Q1GJL0",
      "composite_figi": "BBG003PNL136",
      "share_class_figi": "BBG003PNL145"
    }
  },
  {
    "date": "2019-09-05",
    "intraperiod": false,
    "frequency": "daily",
    "open": 2.7,
    "high": 2.7,
    "low": 2.7,
    "close": 2.7,
    "volume": 120,
    "adj_open": 2.7,
    "adj_high": 2.7,
    "adj_low": 2.7,
    "adj_close": 2.7,
    "adj_volume": 120,
    "security": {
      "id": "sec_nzJNzB",
      "company_id": "com_yKoLoy",
      "stock_exchange_id": "sxg_ozMr9y",
      "name": "Atlantic American Corp.",
      "code": "EQS",
      "currency": "USD",
      "ticker": "AAME",
      "composite_ticker": "AAME:US",
      "figi": "BBG000B9XDQ4",
      "composite_figi": "BBG000B9XB24",
      "share_class_figi": "BBG001S5N8T1"
    }
  },
  {
    "date": "2019-09-05",
    "intraperiod": false,
    "frequency": "daily",
    "open": 62.32,
    "high": 63.445,
    "low": 62.17,
    "close": 62.74,
    "volume": 392125,
    "adj_open": 62.32,
    "adj_high": 63.445,
    "adj_low": 62.17,
    "adj_close": 62.74,
    "adj_volume": 392125,
    "security": {
      "id": "sec_bzqpXx",
      "company_id": "com_ogDBOz",
      "stock_exchange_id": "sxg_ozMr9y",
      "name": "Aaron`s Inc",
      "code": "EQS",
      "currency": "USD",
      "ticker": "AAN",
      "composite_ticker": "AAN:US",
      "figi": "BBG000D9VBX0",
      "composite_figi": "BBG000D9V7T4",
      "share_class_figi": "BBG001S7STN2"
    }
  },
  {
    "date": "2019-09-05",
    "intraperiod": false,
    "frequency": "daily",
    "open": 9.26,
    "high": 9.82,
    "low": 9.26,
    "close": 9.79,
    "volume": 687337,
    "adj_open": 9.26,
    "adj_high": 9.82,
    "adj_low": 9.26,
    "adj_close": 9.79,
    "adj_volume": 687337,
    "security": {
      "id": "sec_AXGAyM",
      "company_id": "com_zqRlJy",
      "stock_exchange_id": "sxg_ozMr9y",
      "name": "Applied Optoelectronics Inc",
      "code": "EQS",
      "currency": "USD",
      "ticker": "AAOI",
      "composite_ticker": "AAOI:US",
      "figi": "BBG00564XQN4",
      "composite_figi": "BBG000D6VW15",
      "share_class_figi": "BBG001SG47G4"
    }
  },
  {
    "date": "2019-09-05",
    "intraperiod": false,
    "frequency": "daily",
    "open": 48.18,
    "high": 49.76,
    "low": 48.02,
    "close": 48.42,
    "volume": 140168,
    "adj_open": 48.18,
    "adj_high": 49.76,
    "adj_low": 48.02,
    "adj_close": 48.42,
    "adj_volume": 140168,
    "security": {
      "id": "sec_PypZX3",
      "company_id": "com_rg0WKy",
      "stock_exchange_id": "sxg_ozMr9y",
      "name": "AAON Inc.",
      "code": "EQS",
      "currency": "USD",
      "ticker": "AAON",
      "composite_ticker": "AAON:US",
      "figi": "BBG000C2M952",
      "composite_figi": "BBG000C2LZP3",
      "share_class_figi": "BBG001S6CZK0"
    }
  }
];

function Home() {

  return <FlexColumn height="90vh">
    <Title>Stock Prices by Exchange</Title>
    <FlexRow middle wrapRow>
      { stockPrices.map( (stock, index) => <Card key={ index } { ...stock }/>) }
    </FlexRow>
  </FlexColumn>

}

export default Home;