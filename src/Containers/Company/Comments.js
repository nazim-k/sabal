import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Comments from 'Components/Company/Comments';

const getCommentsByTicker = (state, ticker) => state.company.comments[ticker];
const getComments = createSelector(
  [ getCommentsByTicker ],
  comments => comments || []
);
const CommentsContainer = ({ comments }) => <Comments comments={ comments }/>;

export default connect(
  (state, ownProps) => {
    const { ticker } = ownProps;
    return {
      comments: getComments(state, ticker),
    }
  }
)(CommentsContainer)