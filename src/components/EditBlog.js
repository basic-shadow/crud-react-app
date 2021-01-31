import React, {useState, useEffect} from 'react';
import {
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

import { Link, useHistory } from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState';
 
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EditBlog(props) {
  const currentId = props.match.params.id;
  const {posts, editPost} = React.useContext(GlobalContext);
  const history = useHistory();
  const {id, title, description, img} = posts.find((item) => {return item.id === currentId}) ?? 
  props.history.location.state.initialPost;
  const [titleName, setTitleName] = useState(title);
  const [imgURL, setImgURL] = useState(img);
  const [descriptionName, setDescriptionName] = useState(description);

    useEffect(() => {
        setTitleName(titleName);
        setImgURL(imgURL);
        setDescriptionName(descriptionName);
        console.log(titleName);
    }, [titleName, imgURL, descriptionName]);

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
        id, title: titleName, description: descriptionName, 
        img: imgURL,
        dateFormat
      };
      
      editPost(post);
      history.push({pathname: '/', state: {type: 'delete', id}});
  }


  const onChangeTitle = (e) => {
    setTitleName(() => e.target.value);
  }

  const onChangeImg = (e) => {
    setImgURL(() => e.target.value);
  }

  const onChangeDescription = (e) => {
    setDescriptionName(() => e.target.value);
  }

  return (
    <div style={{width: '100%', display: 'flex',justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
        <Form onSubmit={onSubmit} style={{width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
             <FormGroup>
                <Label style={{fontSize: '2rem'}}>Title</Label>
                <Input type="text" onChange={onChangeTitle} value={titleName} placeholder="Enter title"/>
                <Label style={{fontSize: '1.2rem', paddingTop: "40px"}}>Picture URL</Label>
                <Input type="text" onChange={onChangeImg} value={imgURL} placeholder="Picture Location in Network"/>
                <Label style={{fontSize: '1.2rem', paddingTop: "40px"}}>Blog</Label>
                <Input type="textarea" onChange={onChangeDescription} value={descriptionName} placeholder="Text here"/>
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


