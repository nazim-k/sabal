import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Comments from 'Components/Company/Comments';

const getComments = createSelector(
  (state, ownProps) => state.company.comments[ ownProps.ticker ],
  comments => comments || []
);
const CommentsContainer = ({ comments }) => <Comments comments={ comments }/>;

export default connect(
  (state, ownProps) => ({
    comments: getComments(state, ownProps)
  })
)(CommentsContainer)