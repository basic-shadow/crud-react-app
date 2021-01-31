import React from 'react';
import {
  Input,
  InputGroup,
    Navbar,
    NavItem,
    Nav,
    Media,
    NavLink,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem,
    Button,
} from 'reactstrap';

import {FaTwitter, FaTelegram, FaInstagram, FaYoutube, FaComment} from 'react-icons/fa';
import {MdFavorite} from 'react-icons/md';
import img1 from '../assets/img1.jpg';
import card1 from '../assets/card1.jpg';
import {Link } from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState';


var coverImg = {
  position: 'absolute',
  backgroundColor: 'black',
  top: '-15%',
  opacity: 0.4,
  width: '100%',
  height: '110vh',
};

var titleText = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxLines: 1,
    color: 'white', 
    fontSize: '40px',
    maxHeight: '15%'
};

var descriptionText = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  color: 'white', 
  fontSize: '20px',
  maxHeight: '60%'
};


var img  = {
  position: 'absolute', top: '-15%',width: '100%', height: '110vh', zIndex: -4
};

var bg  = {
  position: 'relative', width: '100%', height: '120vh', zIndex: -2
};

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [lang, setLang] = React.useState('English');
  const {posts} = React.useContext(GlobalContext);
  const en = [{
    navbar: ['Home', 'Blog', 'Contacts']
  },
  {
    body: ['Welcome to my blog', 'Explore Things', 'Featured Post', 'African Desert Tours', 
    'Read More', 'Recent Posts', 'Add Post', 'Subscribe'],
    card1: ['First Blog ever', 'text', 'January'],
    card2: ['Second Blog', 'text', 'January'],
  }
  ];

  const es = [{
    navbar: ['Home', 'Blog', 'Contacts']
  },
  {
    body: ['Welcome to my blog', 'Explore Things', 'Featured Post', 'African Desert Tours', 
    'Read More', 'Recent Posts', 'Add Post', 'Subscribe'],
    card1: ['First Blog ever', 'text', 'January'],
    card2: ['Second Blog', 'text', 'January'],
  }
  ];

  const ru = [{
    navbar: ['Домой', 'Блог', 'Контакты']
  },
  {
    body: ['Добро пожаловать в мой Блог Пейдж', 'Расширяй кругозор', 'Очень крутой блог', 'Туры по африканской пустыне ', 
    'Читать больше', 'Недавние Посты', 'Добавить пост', 'Подписаться'],
    card1: ['Первый Блог в истории', 'text', 'Январь'],
    card2: ['Второй Блог', 'text', 'Январь'],
  }
  ];

  const [langText, setLangText] = React.useState(en);

  React.useEffect(() => {
    if (lang === "Russian")
      setLangText(ru);
    else if (lang === "English")
      setLangText(en);
    else if (lang === "Spanish")
      setLangText(es);
  }, [lang]);


  console.log(posts);
  const toggle = () => setOpen((prev) => !prev);
  const changeLang = (e) => setLang(() => e.currentTarget.textContent);

  return (
    <div style={{overflow: 'hidden'}}>
      
      <Button outline color="secondary" style={{color: "white", position: 'absolute',
        top: '50%', right: '30%', border: '3px solid rgb(222,222,222)', width: '10%'}}>
          <NavLink style={{color: 'white'}}>Explore Things</NavLink></Button>

          <Button color="danger" style={{color: 'white', fontSize: '1.2rem', 
              position: 'absolute', top: '111%', left: '50%'}} outline
              >Read More</Button>
      <div style={bg}>
        <Media object src={img1} style={img}/>
        <div style={coverImg}></div>
        <div style={{position: 'absolute', zIndex: 1, right: '20%', top: '20%', color: "white", letterSpacing: 3,
            fontWeight: 'bold'}}>
            <h2>Welcome to my blog</h2>
        </div>
        <h2 style={{position: 'absolute', zIndex: 1, top: '54%',
        left: '30%', color: "rgb(222,222,222)"}}>Featured Post</h2>
        <div style={{position: 'relative', zIndex: 1, top: '62%', 
            width: '40%', left: '32%',height: '30%'}}>
              <div style={{width: "100%", height: '120%',  backgroundColor: 'black',opacity: 0.1, position: 'absolute'}}></div>
              <div style={{width: "100%", height: '40%', top: '80%', backgroundColor: 'black',opacity: 0.5, position: 'absolute'}}></div>
              <img src={card1} style={{objectFit: 'fill',height: '120%', width: '100%', position: 'absolute',zIndex:-1}} />
              <h4 style={{color: 'white', fontSize: '40px', position: 'absolute', zIndex: 2, top: '84%', left: '30%'}}>
                African Desert Tours</h4>
        </div>
        
      </div>
      <div id="blog" style={{display: 'flex', marginTop: '7%', flexDirection: 'column', justifyContent: 'center',
    alignItems: 'center'}}>
          <h2 style={{position: 'relative',left: '-25%',color: "rgb(55, 55,100)"}}>Recent Posts</h2>
          
          {posts.map((item) => {
           return (<div key={item.id} style={{marginTop: '70px',
           border: '1px solid black'}}><div style={{position: 'relative', 
              width: '800px', height: '350px', background: '#033A42'}}>
                <img src={item.img} style={{objectFit: 'cover',height: '100%', width: '40%', 
                }} />
                <Link to={{pathname: `/view/${item.id}`, state: {item}}}>
                  <div 
                style={{position: 'absolute', zIndex: 2, top: '7%', left: '43%', width: '54%',
                height: '88%'}}>
                  <h4 style={titleText}>{item.title}</h4>
                  <hr style={{background: '#1C7FA6', width: '300px', marginRight: '130px'}}/>
                  <p style={descriptionText}>{item.description}</p>
                  <div style={{position: 'absolute', zIndex: 2, width: '100%', top: '83%',}}>
                    <hr style={{background: 'white'}}/>
                    <div style={{display: 'flex', justifyContent: 'space-between', color: 'white'}}>
                      <div style={{display: 'flex', width: '50%'}}>
                        <small>{item.dateFormat}</small>
                      </div>
                      <div style={{display: 'flex'}}>
                        <div  style={{display: 'flex'}}>
                          <FaComment/>
                          <small style={{marginLeft: '7px'}}>22</small>
                        </div>
                        <div style={{display: 'flex', marginLeft: '30px'}}>
                          <MdFavorite/>
                          <small style={{marginLeft: '7px'}}>100</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </Link>
          </div></div>)
        })}
        <Button style={{margin: '100px 0'}} outline color="primary"><NavLink style={{color: 'black'}} href="/add">Add Post</NavLink></Button>
      </div>

        <Navbar style={{position: 'absolute', top: 0, width: '100%', justifyContent: 'center', background:'#f2f2f2',
      boxShadow: '2px 2px 10px rgb(60,60,60)'}}>
          <Nav style={{width: '60%', justifyContent: 'space-around'}}>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#blog">Blog</NavLink>
          </NavItem>
          <NavItem >
            <NavLink href="#contacts">Contacts</NavLink>
          </NavItem>
          <Dropdown isOpen={open} toggle={toggle}>
              <DropdownToggle caret>
                {lang}
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem  onClick={changeLang}>English</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={changeLang}>Russian</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={changeLang}>Spanish</DropdownItem>
              </DropdownMenu>
          </Dropdown>
            </Nav>
        </Navbar>
      <div id="contacts" style={{background: "#030B54", width: '100%', 
      height: '30vh', position: 'relative', display: 'flex',justifyContent:'center', alignItems: 'center'}}>
        <InputGroup style={{width: '40%', position: 'relative', bottom: '25%', }}>
        <Input placeholder="Email" style={{background: 'rgba(0,0,0,0)', border: '2px solid white', color: 'white',
      letterSpacing: 2}}/> 
        <Button color="success" style={{marginLeft: '10%'}} outline>Subscribe</Button>
        </InputGroup>
        <div style={{background: "#16044D", width: '100%', 
      height: '10vh', position: 'absolute', bottom: '0', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h4 style={{color: 'white', fontSize: '1rem', marginLeft: '20%'}}>Copyright</h4>
        <div style={{color: 'white', display: 'flex', justifyContent: 'space-between', width: '12%',
      fontSize: '1.7rem', marginLeft: 'auto', marginRight: '15%'}}>
          <FaTelegram/> <FaInstagram/> <FaTwitter/> <FaYoutube />
        </div>
        <div>
        </div>
      </div>
      </div>
    </div>
  );
}


