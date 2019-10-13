import React from 'react';
import styled from 'styled-components';
import { FlexColumn, FlexRow, Table, Title } from '../Styled';
import { extractRowsFromObject } from '../../helpers';
import Comments from './Commets';
import Index from './CommentForm';
import News from './News';

const data = {
  "id": "com_NX6GzO",
  "ticker": "AAPL",
  "name": "Apple Inc",
  "lei": "HWUPKR0MPOU8FGXBT394",
  "legal_name": "APPLE INC",
  "stock_exchange": "NasdaqGS",
  "sic": 3571,
  "short_description": "Apple, Inc. engages in the design, manufacture, and marketing of mobile communication, media devices, personal computers, and portable digital music players. It operates through the following geographical segments: Americas, Europe, Greater China, Japan, and Rest of Asia Pacific. The Americas segment includes both North and South America. The Europe segment consists of European countries, as well as India, the Middle East, and Africa. The Greater China segment comprises of China, Hong Kong, and Taiwan. The Rest of Asia Pacific segment includes Australia and Asian countries not included in the reportable operating segments of the company. The company was founded by Steven Paul Jobs, Ronald Gerald Wayne, and Stephen G. Wozniak on April 1, 1976 and is headquartered in Cupertino, CA.",
  "long_description": "Apple Inc. designs, manufactures, and markets mobile communication and media devices, personal computers, and portable digital music players to consumers, small and mid-sized businesses, and education, enterprise, and government customers worldwide. The company also sells related software, services, accessories, networking solutions, and third-party digital content and applications. It offers iPhone, a line of smartphones; iPad, a line of multi-purpose tablets; and Mac, a line of desktop and portable personal computers. The company also provides iLife, a consumer-oriented digital lifestyle software application suite; iWork, an integrated productivity suite that helps users create, present, and publish documents, presentations, and spreadsheets; and other application software, such as Final Cut Pro, Logic Pro X, and FileMaker Pro. In addition, it offers Apple TV that connects to consumers' TV and enables them to access digital content directly for streaming high definition video, playing music and games, and viewing photos; Apple Watch, a personal electronic device; and iPod, a line of portable digital music and media players. Further, the company sells Apple-branded and third-party Mac-compatible, and iOS-compatible accessories, such as headphones, displays, storage devices, Beats products, and other connectivity and computing products and supplies. Additionally, it offers iCloud, a cloud service; AppleCare that offers support options for its customers; and Apple Pay, a mobile payment service. The company sells and delivers digital content and applications through the iTunes Store, App Store, Mac App Store, TV App Store, iBooks Store, and Apple Music. It also sells its products through its retail and online stores, and direct sales force, as well as through third-party cellular network carriers, wholesalers, retailers, and value-added resellers. Apple Inc. was founded in 1977 and is headquartered in Cupertino, California.",
  "ceo": "Tim Cook",
  "company_url": "www.apple.com",
  "business_address": "ONE APPLE PARK WAY, CUPERTINO, CA 95014",
  "mailing_address": "ONE APPLE PARK WAY, CUPERTINO, CA 95014",
  "business_phone_no": "(408) 996-1010",
  "hq_address1": "1 Infinite Loop",
  "hq_address2": null,
  "hq_address_city": "Cupertino",
  "hq_address_postal_code": "95014",
  "entity_legal_form": "INCORPORATED",
  "cik": "0000320193",
  "latest_filing_date": "2019-07-31",
  "hq_state": "California",
  "hq_country": "United States of America",
  "inc_state": "California",
  "inc_country": "United States of America",
  "employees": 132000,
  "entity_status": "ACTIVE",
  "sector": "Consumer Goods",
  "industry_category": "Consumer Durables",
  "industry_group": "Electronic Equipment",
  "template": "indu",
  "standardized_active": true,
  "first_fundamental_date": "2007-09-29",
  "last_fundamental_date": "2019-06-29",
  "first_stock_price_date": "1980-12-12",
  "last_stock_price_date": "2019-09-05"
};

const keys = {
  ticker: 'Ticker',
  name: 'Name',
  legal_name: 'Legal Name',
  stock_exchange: 'Stock Exchange',
  ceo: 'CEO Name',
  entity_status: 'Entity Status',
  hq_country: 'Head Quarters Country',
  sector: 'Sectors'
};

const CommentsContainer = styled.div`
 width: 100%;
 height: 35%;
 padding: 5px 20px;
 box-sizing: border-box;
 margin-bottom: 10px;
`;

const CommentsDiv = styled.div`
  width: 100%;
  padding: 5px 0;
  height: 100%;
  text-align: left;
  overflow-y: auto;
  border-top: 4px solid rgb(204, 204, 204);
  border-bottom: 4px solid rgb(204, 204, 204);
`;

const NewsContainer = styled.div`
  height: 100%;
  width: 50%;
  padding: 10px 20px 40px;
  box-sizing: border-box;
  overflow-y: auto;
`;

function Company() {
  const rows = extractRowsFromObject({ data, keys });
  return <FlexRow height="120vh">
    <FlexColumn key="companyInfo" between width="50%">
      <Title>Company Information</Title>
      <FlexRow height="auto" padding="0 20px 20px">
        <Table rows={ rows } hover={ false } padding="5px"/>
      </FlexRow>
      <CommentsContainer>
        <CommentsDiv>
          <Comments/>
        </CommentsDiv>
      </CommentsContainer>
      <FlexColumn height="auto" padding="20px">
        <Index/>
      </FlexColumn>
    </FlexColumn>
    <NewsContainer key="news">
      <Title>All Related News</Title>
      <News/>
    </NewsContainer>
  </FlexRow>
}

export default Company;