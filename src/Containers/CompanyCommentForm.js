import React, { useState } from 'react';
import { connect } from 'react-redux';
import CommentForm from '../Components/Company/CommentForm';
import { companyCommentsActionCreators } from '../actionCreators';

function useInput(initValue) {
  const [ value, setValue ] = useState(initValue);
  const onChange = e => {
    const value = typeof e === 'string'
      ? e
      : e.target.value;
    setValue(value);
  };
  return { value, onChange, }
}

function CompanyCommentFormContainer({ addComment, ticker }) {

  const username = useInput('');
  const comment = useInput('');

  function submit(e) {
    e.preventDefault();
    addComment({
      ticker,
      username: username.value,
      comment: comment.value
    });
    username.onChange('');
    comment.onChange('');

  }

  return <CommentForm
    username={ username }
    comment={ comment }
    submit={ submit }
  />

}

export default connect(
  null,
  companyCommentsActionCreators
)(CompanyCommentFormContainer)