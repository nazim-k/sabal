import React from 'react';
import styled from 'styled-components';

const comments = [
  { username: 'user1', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { username: 'user2', comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { username: 'user3', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Nec feugiat nisl pretium fusce id velit ut tortor pretium.' },
  { username: 'user4', comment: 'Id donec ultrices tincidunt arcu non sodales. Sit amet est placerat in egestas erat imperdiet sed. Molestie a iaculis at erat pellentesque adipiscing commodo. Integer quis auctor elit sed vulputate mi sit amet. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo.' }
];

const Paragraph = styled.p`
  font-weight: ${ props => props.bold ? 'bold':'normal' };
  display: inline;
  font-size: ${ props => props.bold ? '1em' : '.9em' }
`;

const CommentContainer = styled.div`
  padding: 5px 0;
  box-sizing: border-box;
`;

function Username({ className, children }) {
  return <Paragraph className={ className } bold>
    { `${children}: ` }
  </Paragraph>
}

function Comments() {

  return <div>
    {
      comments.map( (comment, index) => (
        <CommentContainer key={ index }>
          <Username>{ comment.username }</Username>
          <Paragraph>{ comment.comment }</Paragraph>
        </CommentContainer>
      ))
    }
  </div>

}

export default Comments;