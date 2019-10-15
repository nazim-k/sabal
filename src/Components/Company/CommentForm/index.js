import React from 'react';
import { Input, TextArea, Button } from './Styled';

function ComemntForm() {

  return <form>
    <Input type="text" placeholder="name"/>
    <TextArea placeholder="comment"/>
    <Button type="submit">Comment</Button>
  </form>

}

export default ComemntForm;