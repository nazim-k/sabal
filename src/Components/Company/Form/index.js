import React from 'react';
import PropTypes from 'prop-types';
import { FlexBox, Title } from 'Components/StyledComponents';
import { Input, TextArea, Button } from './Styled';
import CONFIG from 'CONFIG';

const { usernamePlaceholder, commentPlaceholder, button } = CONFIG.company.form;

function Form({ username, comment, submit }) {

  return <FlexBox as="section" height="auto" left padding="0 20px">

    <Title>Leave a comment</Title>
    <form onSubmit={ submit } style={{ width: '100%' }}>
      <Input
        type="text"
        placeholder={ usernamePlaceholder }
        required
        pattern="^[a-zA-Zа-яА-Я].{3,}"
        minlength="3"
        { ...username }
      />
      <TextArea
        placeholder={ commentPlaceholder }
        required maxlength="320"
        { ...comment }
      />
      <Button type="submit">{ button }</Button>
    </form>
  </FlexBox>

}

Form.defaultProps = {
  username: { value: '' },
  comment: { value: '' },
};

Form.propTypes = {
  username: PropTypes.exact({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }),
  comment: PropTypes.exact({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }),
  submit: PropTypes.func.isRequired,
};

export default Form;