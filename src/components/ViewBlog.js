import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

import { Link,useHistory} from 'react-router-dom';
import {FaTwitter, FaTelegram, FaInstagram, FaYoutube, FaComment} from 'react-icons/fa';
import {MdFavorite} from 'react-icons/md';
import { GlobalContext } from '../context/GlobalState';


var titleText = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxLines: 1,
  color: 'rgb(10,10,60)', 
  fontSize: '40px',
  maxHeight: '15%'
};

var descriptionText = {
overflow: 'hidden',
textOverflow: 'ellipsis',
color: 'rgb(50,50,50)', 
fontSize: '20px',
maxHeight: '60%'
};
 
export default function ViewBlog(props) {
  const currentId = props.match.params.id;
  const { posts, removePost} = React.useContext(GlobalContext);
  const {id, title, description, img, dateFormat} = posts.find((item) => {return item.id === currentId}) ?? 
      props.history.location.state.initialPosts.find(item => {return item.id === currentId});
  const initialPost = {id, title, description, img, dateFormat};
  const history = useHistory();
  
  const onDelete = () => {
      removePost(id);
      history.push({pathname: '/', state: {description, title}});
  }

  const onEdit = () => {
    history.push({pathname: `/edit/${id}`, state: {initialPost}});
  }
  
  return (
    <div style={{backgroundColor:'#f1f1f1', display: 'flex', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{background: '#4A9161', width: '20%', height: '75%',
          color: "rgb(40,40,40)",position: 'relative', padding: '10px 5px', alignItems: 'center', display: 'flex', 
          flexDirection: 'column'}}>
          <img src={img} style={{padding: '40px 10px',width: '90%', heigth: '90%', objectFit: 'cover', borderRadius: '50%',
        }} alt="img"/>
          <p style={{color: 'rgb(230,230,230)', fontSize: '20px', fontWeight: 'bold'}}>Here is my short intro to the blog</p>
      </div>
      <div style={{backgroundColor: "#ffffff", boxShadow: "2px 5px 10px grey", width: '45%', height: '75%',
          color: "rgb(40,40,40)", padding: "50px 40px", position: 'relative', left: '2%', border: '1px solid black'}}>
        <h2 style={titleText}>{title}</h2>
        <small>{dateFormat}</small>
        <hr/>
        <p style={descriptionText}>{description}</p>
        <div style={{position: 'absolute', top: '80%', width: '90%'}}>
          <hr/>
          <div style={{display: 'flex', justifyContent: 'space-evenly', width: '50%', marginLeft: "auto"}}>
          <FaTelegram/> <FaInstagram/> <FaTwitter/> <FaYoutube />
          </div>
          <hr/>
          <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 30px'}}>
            <div style={{display: 'flex'}}>
            <div  style={{display: 'flex'}}>
              <FaComment/>
              <h4 style={{marginLeft: '10px'}}>22</h4>
            </div>
            <div style={{display: 'flex', marginLeft: '30px'}}>
            <MdFavorite/>
              <h4 style={{marginLeft: '10px'}}>100</h4>
            </div>
            </div>
            <div style={{display: 'flex', width: '50%', justifyContent: 'space-evenly', alignItems: 'center'}} >
                <Button color="primary" onClick={onEdit} outline>Edit</Button>
                <Button color="danger" outline onClick={onDelete}>Delete</Button>
                <Link to="/" >Go Back</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

