import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { NewsRow, Spinner } from './Styled';
import {  OverflowDivision, Title, Paragraph } from 'Components/StyledComponents';
import { ErrorMessage } from 'Components/Common';
import CONFIG from 'CONFIG';

const height = 100 - CONFIG.header.height;

const RelatedNews = ({ news }) => news.map( (n, index) => (
  <NewsRow key={ index } href={ n.url }>
    <article>
      <header>
        <Title as="h4" >{ n.title }</Title>
        <Paragraph left>{ n.summary }</Paragraph>
      </header>
      <Paragraph right margin="0 0 7px" fontSize=".8em">
        { moment(n.publication_date).format("MMM Do YY") }
      </Paragraph>
    </article>
  </NewsRow>
));

function News({ news, handleScroll, isLoading, failError }) {

  return (
    <OverflowDivision
      as="section"
      width="50%"
      onScroll={ handleScroll }
      height={ `${ height }vh` }
    >
      <Title>All Related News</Title>

      {/* Show message if there is no loading and no news*/}
      { !isLoading && !news.length && <Paragraph center>No Related News</Paragraph> }

      <RelatedNews news={ news }/>
      { failError && <ErrorMessage error={ failError } center/> }
      { isLoading && <Spinner/> }

    </OverflowDivision>
  )

}

News.defaultProps = {
  news: [],
  isLoading: true,
  failError: null
};

News.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      publication_date: PropTypes.string.isRequired,
    })
  ),
  handleScroll: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  failError: PropTypes.oneOfType([
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]).isRequired,
    PropTypes.oneOf([null])
  ])
};

export default News;