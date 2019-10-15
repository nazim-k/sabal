import React from 'react';
import moment from 'moment';
import { Headline, Summany, PublicationDate, NewsContainer } from './Styled';
import { FlexRow } from '../../CommonStyled';

const index = [
  {
    "id": "nws_wWDlZA",
    "title": "Blue Chips Fuel Record $150 Billion Bond Binge as Trade Outlook Brightens",
    "publication_date": "2019-09-06T15:15:38.000Z",
    "url": "https://finance.yahoo.com/m/0c4801ba-6071-3eee-9de8-7785104de3ab/blue-chips-fuel-record-%24150.html?.tsrc=rss",
    "summary": "Warren Buffett's Berkshire Hathaway, Apple and Disney are among the companies rushing to borrow."
  },
  {
    "id": "nws_alo79e",
    "title": "Stock Market News: Apple Event Stirs Speculation; Zoom Posts a Bigger Profit",
    "publication_date": "2019-09-06T15:11:36.000Z",
    "url": "https://finance.yahoo.com/index/stock-market-index-apple-event-151136041.html?.tsrc=rss",
    "summary": "Markets moved following the latest report on the employment picture."
  },
  {
    "id": "nws_038Okm",
    "title": "Stock Market News For Sep 6, 2019",
    "publication_date": "2019-09-06T14:24:00.000Z",
    "url": "https://finance.yahoo.com/index/stock-market-index-sep-6-135001022.html?.tsrc=rss",
    "summary": "Markets closed higher on Thursday after the United States and China agreed to resume trade negotiations early next month."
  },
  {
    "id": "nws_59npAN",
    "title": "US Non-Farm Payroll Disappoints: Whose Fault Is It?",
    "publication_date": "2019-09-06T14:20:16.000Z",
    "url": "https://finance.yahoo.com/m/0e9b4192-8c37-3f70-bc43-f86c9319b26d/us-non-farm-payroll.html?.tsrc=rss",
    "summary": "Today, the Bureau of Labor Statistics released the US non-farm payroll data for August. The US economy added fewer-than-expected jobs last month."
  },
  {
    "id": "nws_vx8kav",
    "title": "The iPhone likely won’t be the core of Apple’s iPhone event",
    "publication_date": "2019-09-06T12:56:00.000Z",
    "url": "https://finance.yahoo.com/m/49fd9000-ed46-3df8-b25f-e4f94b3c33d0/the-iphone-likely-won%E2%80%99t-be.html?.tsrc=rss",
    "summary": "Apple Inc.’s fall event is usually all about the iPhone, but this year the device will likely be relegated to a supporting role."
  },
  {
    "id": "nws_Yn6eOZ",
    "title": "China’s Reserve Ratio Cut Might Infuriate Trump",
    "publication_date": "2019-09-06T12:53:36.000Z",
    "url": "https://finance.yahoo.com/m/2cafb342-289e-34e2-a967-da3d9ba0b975/china%E2%80%99s-reserve-ratio-cut.html?.tsrc=rss",
    "summary": "Today, China announced a reserve ratio cut for banks. The People’s Bank of China lowered the reserve ratio by 50 basis points for all banks."
  },
  {
    "id": "nws_Eb93no",
    "title": "Apple’s big September event will be about a lot more than new iPhones",
    "publication_date": "2019-09-06T10:00:22.000Z",
    "url": "https://finance.yahoo.com/m/a61cf8dd-b18c-3e13-8a59-a12286d02eca/apple%E2%80%99s-big-september-event.html?.tsrc=rss",
    "summary": "Apple will be hosting its annual autumn event at its Cupertino, California headquarters on Sept. 10.  Much like in years past, the company is expected to unveil new iPhones, Apple Watches, and perhaps a few other gadgets.  It pretty much goes without saying at this point that Apple will release a new iPhone come September."
  },
  {
    "id": "nws_Eb933o",
    "title": "Apple’s New iPhone May Be a Yawner, but Don’t Get Caught Sleeping on the Stock",
    "publication_date": "2019-09-06T09:30:00.000Z",
    "url": "https://finance.yahoo.com/m/f8a4839d-de96-371d-8ab7-72ce62b38d58/apple%E2%80%99s-new-iphone-may-be-a.html?.tsrc=rss",
    "summary": "Though interest usually spikes around Apple’s product reveals in September, their peaks have steadily declined since 2015. This year’s event is especially dull ahead of next year’s 5G iPhones."
  },
  {
    "id": "nws_B7rkkR",
    "title": "How Fairphone’s scrappy device offers DIY alternative to the iPhone",
    "publication_date": "2019-09-06T08:45:43.000Z",
    "url": "https://finance.yahoo.com/m/b1ac57e4-3150-3fce-a684-24df2ceb30c7/how-fairphone%E2%80%99s-scrappy.html?.tsrc=rss",
    "summary": "As Apple prepares to unveil a new series of sleek, sealed, impeccably packaged iPhones on Tuesday, it has little to fear from a scrappy rival launching a smartphone so loosely assembled that it is delivered with a screwdriver in the box.  The Fairphone 3 also comes without a charger or earphones, but does include a rubber bumper to help prevent it from breaking and falling apart if you drop it.  While Apple’s watchword is style, Fairphone’s is sustainability."
  },
  {
    "id": "nws_4Qb664",
    "title": "Family-run Civic Hotel finds itself in a prime spot (Photos)",
    "publication_date": "2019-09-06T08:00:00.000Z",
    "url": "https://finance.yahoo.com/m/46910d20-6225-31e7-ace6-43ce694762e7/family-run-civic-hotel-finds.html?.tsrc=rss",
    "summary": "The nearly $8 million renovation brings this boutique hotel near Amazon and the soon-to-be Apple offices out of the 1960s. The 53-room hotel will eventually house a coffee shop and restaurant, owner Neha Nariya said. She’s still looking for someone to fill the space."
  }
];

function News() {

  return index.map( (n, index) => (
    <NewsContainer key={ index } href={ n.url }>
      <article>
        <Headline>{ n.title }</Headline>
        <Summany>{ n.summary }</Summany>
        <FlexRow right padding="0 0 10px">
          <PublicationDate>{ moment(n.publication_date).format("MMM Do YY") }</PublicationDate>
        </FlexRow>
      </article>
    </NewsContainer>
  ))

}

export default News;