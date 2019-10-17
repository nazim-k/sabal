import React from 'react';
import { FlexSection, Title } from '../../CommonStyled';
import { Form, Input, TextArea, Button } from './Styled';

function ComemntForm({ username, comment, submit }) {

  return <FlexSection height="auto" left padding="0 20px">

    <Title>Leave a comment</Title>
    <Form onSubmit={ submit }>
      <Input
        type="text"
        placeholder="name"
        required
        pattern="^[a-zA-Zа-яА-Я].{3,}"
        minlength="3"
        { ...username }
      />
      <TextArea placeholder="comment" required minlength="1" maxlength="320" { ...comment }/>
      <Button type="submit">Comment</Button>
    </Form>
  </FlexSection>

}

export default ComemntForm;