import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentForm from 'Components/Company/Form';
import { commentsActionCreators } from 'actionCreators';

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

function FormContainer({ addComment, ticker }) {

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

FormContainer.defaultProps = {
  ticker: ''
};

FormContainer.propTypes = {
  ticker: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  commentsActionCreators
)(FormContainer)