import React, {useState} from 'react';
import {
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

import { Link, useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {GlobalContext} from '../context/GlobalState';
 
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Add() {
  const {addPost} = React.useContext(GlobalContext);
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');


  const onSubmit = () => {
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      var date = new Date();
      var day = date.getDate();
      var month = monthNames[date.getMonth()];
      var year = date.getFullYear();

      const dateFormat = `${month} ${day}, ${year}`;

      const post = {
        id: uuidv4(), title, description, 
        img,
        dateFormat
      };

      addPost(post);
      history.push('/');
  }

  const onChangeTitle = (e) => {
    setTitle(() => e.target.value);
  }

  const onChangeImg = (e) => {
    setImg(() => e.target.value);
  }

  const onChangeDescription = (e) => {
    setDescription(() => e.target.value);
  }

  return (
    <div style={{width: '100%', display: 'flex',justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
        <Form onSubmit={onSubmit} style={{width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
             <FormGroup>
                <Label style={{fontSize: '2rem'}}>Title</Label>
                <Input type="text" onChange={onChangeTitle} value={title} placeholder="Enter title"/>
                <Label style={{fontSize: '1.2rem', paddingTop: "40px"}}>Picture URL</Label>
                <Input type="text" onChange={onChangeImg} value={img} placeholder="Picture Location in Network"/>
                <Label style={{fontSize: '1.2rem', paddingTop: "40px"}}>Blog</Label>
                <Input type="textarea" onChange={onChangeDescription} value={description} placeholder="Text here"/>
             </FormGroup>
            <Container style={{display: 'flex', width: '20%', justifyContent: 'space-between', alignItems: 'center'}}>
              
            <Button type="submit" color="dark" style={{width: '150px'}}>
                  Submit
              </Button>
              <Link to="/" >Go back</Link>
            </Container>
        </Form>
    </div>
  );
}


