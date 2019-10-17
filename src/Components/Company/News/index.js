import React from 'react';
import moment from 'moment';
import { Headline, Summany, PublicationDate, ScrollDivision, NewsRow, Spinner } from './Styled';
import { FlexRow, Title, Paragraph } from '../../CommonStyled';
import ErrorMessage from '../../ErrorMessage';


const RelatedNews = ({ news }) => news.map( (n, index) => (
  <NewsRow key={ index } href={ n.url }>
    <article>
      <Headline>{ n.title }</Headline>
      <Summany>{ n.summary }</Summany>
      <FlexRow right padding="0 0 10px">
        <PublicationDate>
          { moment(n.publication_date).format("MMM Do YY") }
        </PublicationDate>
      </FlexRow>
    </article>
  </NewsRow>
));

function News({ news, handleScroll, isLoading, failError }) {

  return <ScrollDivision onScroll={ handleScroll }>
    <Title>All Related News</Title>

    {/* Show message if there is no loading and no news*/}
    { !isLoading && !news.length && <Paragraph center>No Related News</Paragraph> }

    <RelatedNews news={ news }/>
    { failError && <ErrorMessage error={ failError } center/> }
    { isLoading && <Spinner/> }
  </ScrollDivision>

}

export default News;