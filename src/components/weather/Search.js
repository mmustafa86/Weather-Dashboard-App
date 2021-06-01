import React, { useState } from "react";
import { Input,Form } from "semantic-ui-react";
import { Button } from 'semantic-ui-react'

export const Search = (props) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

const onSubmit=e =>{
    e.preventDefault();
  if(text===''){
alert("Please enter something");
  }else{
    props.handleData(text)
    setText('');
  }
   
}


  return (
    <div>
    <Form onSubmit={onSubmit}>
      <Input
        placeholder="Search..."
        type="text"
        name="text"
        value={text}
        onChange={onChange}
      />
      <Button>Search</Button>
     </Form>
    </div>
  );
};
export default Search;
