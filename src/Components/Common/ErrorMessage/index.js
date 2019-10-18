import React from 'react';
import PropTypes from 'prop-types';
import { FlexBox, Paragraph } from 'Components/StyledComponents/index';
import CONFIG from 'CONFIG';

const { errorMessage } = CONFIG;

function ErrorMessage({ error, info, ...flexProps }) {
  const message = errorMessage[error.status] || errorMessage.default;

  if (!info && typeof error === 'string') info = error;

  return <FlexBox height="auto" { ...flexProps }>
    <Paragraph red>{ message }</Paragraph>
    <Paragraph gray>{ info }</Paragraph>
  </FlexBox>
}

ErrorMessage.defaultProps = {
  error: { status: 450 },
  info: ''
};

ErrorMessage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired
  ]),
  info: PropTypes.string
};

export default ErrorMessage;