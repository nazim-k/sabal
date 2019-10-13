import React from 'react';
import { Input, TextArea, Button } from './Styled';

function Index() {

  return <div>
    <Input type="text" placeholder="name"/>
    <TextArea placeholder="comment"/>
    <Button>Comment</Button>
  </div>

}

export default Index;