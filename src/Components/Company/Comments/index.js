import React from 'react';
import { CommentsDiv, Dt, Dd } from './Styled';
import { FlexSection, Title, Paragraph } from '../../CommonStyled';

function CommentsWrapper({ comments }) {
  return <CommentsDiv>
    <dl>
      {
        comments.map((comment, index) => [
          <Dt key={ `username${index}` }>{ `${comment.username}: ` }</Dt>,
          <Dd key={ `comment${index}` }>{ comment.comment }</Dd>
        ])
      }
    </dl>
  </CommentsDiv>
}

function Comments({ comments }) {

  return <FlexSection height="35%" left padding="0 20px">
    <Title>Comments</Title>
    {
      comments.length
        ? <CommentsWrapper comments={ comments }/>
        : <Paragraph margin="0">No Comments yet</Paragraph>
    }
  </FlexSection>;

}

export default Comments;