import React from 'react';
import { FlexColumn, Paragraph } from '../CommonStyled';

function ErrorMessage({ error, info, ...flexProps }) {
  let message;
  switch (error.status) {
    case 401:
      message = 'Unauthorized – Your User/Password API Keys are incorrect';
      break;
    case 403:
      message = 'Forbidden – You are not subscribed to the data feed requested';
      break;
    case 404:
      message = 'Not Found – The endpoint requested does not exist';
      break;
    case 429:
      message = 'Too Many Requests – You have hit a limit';
      break;
    case 500:
      message = 'Internal Server Error – We had a problem with our server. Try again later.';
      break;
    case 503:
      message = 'Service Unavailable';
      break;
    default:
      message = 'Oops! Something went wrong';
  }

  if (!info && typeof error === 'string') info = error;

  return <FlexColumn height="auto" { ...flexProps }>
    <Paragraph red>{ message }</Paragraph>
    <Paragraph gray>{ info }</Paragraph>
  </FlexColumn>
}

ErrorMessage.defaultProps = {
  error: { status: 450 }
};

export default ErrorMessage;