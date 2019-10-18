import React from 'react';
import PropTypes from 'prop-types';
import { Dt, Dd } from './Styled';
import { FlexBox, OverflowDivision, Title, Paragraph } from 'Components/StyledComponents';
import CONFIG from 'CONFIG';

const { title, style } = CONFIG.company.comments;

function CommentsList({ comments }) {
  return <OverflowDivision as="section" { ...style }>
    <dl>
      {
        comments.map((comment, index) => [
          <Dt key={ `username${index}` }>{ `${comment.username}: ` }</Dt>,
          <Dd key={ `comment${index}` }>{ comment.comment }</Dd>
        ])
      }
    </dl>
  </OverflowDivision>
}

function Comments({ comments }) {

  return <FlexBox as="section" height="auto" left padding="0 20px" maxHeight="50%">
    <Title>{ title }</Title>
    {
      comments.length
        ? <CommentsList comments={ comments }/>
        : <Paragraph margin="0">No Comments yet</Paragraph>
    }
  </FlexBox>;

}

Comments.defaultProps = {
  comments: []
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.exact({
      username: PropTypes.string,
      comment: PropTypes.string
    })
  )
};

export default Comments;