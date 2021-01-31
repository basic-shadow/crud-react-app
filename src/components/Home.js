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

import { v4 as uuidv4 } from 'uuid';

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

var initialData = [
  {id: uuidv4(), title: 'First Blog ever', description: 'So if any of you are on the prowl for some new non-recipe blogs, I thought I’d share 7 of my favorites with you today.  I’m guessing you’ll be familiar with a few, but I’m hoping there might be a few new gems in there for you to discover.  And hey — if you have some favorites of your own, pretty please share them in the comments below, because I totally want to check ’em out.', 
  img: 'https://images.unsplash.com/photo-1490507278117-59a4ccd0165f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80', 
  dateFormat: 'January 31, 2021'}
];

export default function Home(props) {
  const [open, setOpen] = React.useState(false);
  const [lang, setLang] = React.useState('English');
  var {posts} = React.useContext(GlobalContext);
  const [initialPosts, setInitialPosts] = React.useState(initialData);

  React.useEffect(() => {
      if (props.history.location.state) {
        initialData = initialPosts.filter((post) => {
          if (post.title !== props.history.location.state.title) {
            return true;
          }
          return false;
        });

        setInitialPosts(initialData);
      }

  }, []);
  
  const en = [{
    navbar: ['Home', 'Blog', 'Contacts']
  },
  {
    body: ['Welcome to my blog', 'Explore Things', 'Featured Post', 'African Desert Tours', 
    'Read More', 'Recent Posts', 'Add Post', 'Subscribe'],
  },
  {
    card1: ['First Blog ever', 'So if any of you are on the prowl for some new non-recipe blogs, I thought I’d share 7 of my favorites with you today.  I’m guessing you’ll be familiar with a few, but I’m hoping there might be a few new gems in there for you to discover.  And hey — if you have some favorites of your own, pretty please share them in the comments below, because I totally want to check ’em out.', 'January'],
  }];

  const es = [{
    navbar: ['Hogar', 'Blog', 'Contactos']
  },
  {
    body: ['Bienvenido a mi blog', 'Explorar cosas ', 'Publicación destacada ', 'Tours por el desierto africano ', 
    'Lee mas ', 'Mensajes recientes', 'Agregar publicación ', 'Suscribir '],
  },
  {
    card1: ['Primer blog de la historia ', 
    'Entonces, si alguno de ustedes está al acecho de algunos blogs nuevos que no sean recetas, pensé en compartir 7 de mis favoritos con ustedes hoy. Supongo que estarás familiarizado con algunas, pero espero que haya algunas gemas nuevas que puedas descubrir. Y bueno, si tienes algunos favoritos, por favor compártelos en los comentarios a continuación, porque quiero verlos. ', 'Enero '],
  }];


  const ru = [{
    navbar: ['Домой', 'Блог', 'Контакты']
  },
  {
    body: ['Добро пожаловать в мой Блог Пейдж', 'Расширяй кругозор', 'Очень крутой блог', 'Туры по африканской пустыне ', 
    'Читать больше', 'Недавние Посты', 'Добавить пост', 'Подписаться'],
  },
  {
    card1: ['Первый Блог в истории', 'Так что, если кто-то из вас ищет новые блоги, не посвященные рецептам, я подумал, что поделюсь с вами 7 моими любимыми. Я предполагаю, что некоторые из них вам будут знакомы, но я надеюсь, что вы обнаружите несколько новых жемчужин. И, эй, если у вас есть свои любимые, пожалуйста, поделитесь ими в комментариях ниже, потому что я полностью хочу их проверить. ', 'Январь'],
  }
  ];

  const [langText, setLangText] = React.useState(en);

  const toggle = () => setOpen((prev) => !prev);
  const changeLang = (e) => {
    setLang(() => e.currentTarget.textContent);
    if (e.currentTarget.textContent === "English") {

        if (initialPosts) {
          let title = en[2].card1[0];
          let description = en[2].card1[1];
          let month = en[2].card1[2];
          let dateFormat = `${month} 31, 2021`;
          initialData = [{id : initialData[0].id, title, description, img: initialData[0].img, dateFormat}];
          setInitialPosts(initialData);
        }
      setLangText(en);
    }
    else if (e.currentTarget.textContent === "Russian") {

       if (initialPosts) {
          let title = ru[2].card1[0];
          let description = ru[2].card1[1];
          let month = ru[2].card1[2];
          let dateFormat = `${month} 31, 2021`;
          initialData = [{id : initialData[0].id, title, description, img: initialData[0].img, dateFormat}];
          setInitialPosts(initialData);
        }
      setLangText(ru);
    }
      else if (e.currentTarget.textContent === "Spanish") {
        if (initialPosts) {
          let title = es[2].card1[0];
          let description = es[2].card1[1];
          let month = es[2].card1[2];
          let dateFormat = `${month} 31, 2021`;
          initialData = [{id : initialData[0].id, title, description, img: initialData[0].img, dateFormat}];
          setInitialPosts(initialData);
        }
        setLangText(es);
    }
  }

  return (
    <div style={{overflow: 'hidden'}}>
      
      <Button outline color="secondary" style={{color: "white", position: 'absolute',
        top: '50%', right: '30%', border: '3px solid rgb(222,222,222)', width: '10%'}}>
          <NavLink style={{color: 'white'}}>{langText[1].body[1]}</NavLink></Button>

          <Button color="danger" style={{color: 'white', fontSize: '1.2rem', 
              position: 'absolute', top: '111%', left: '45%'}} outline
              >{langText[1].body[4]}</Button>
      <div style={bg}>
        <Media object src={img1} style={img}/>
        <div style={coverImg}></div>
        <div style={{position: 'absolute', zIndex: 1, right: '20%', top: '20%', color: "white", letterSpacing: 3,
            fontWeight: 'bold'}}>
            <h2>{langText[1].body[0]}</h2>
        </div>
        <h2 style={{position: 'absolute', zIndex: 1, top: '54%',
        left: '25%', color: "rgb(222,222,222)", fontSize: '2.5rem'}}>{langText[1].body[2]}</h2>
        <div style={{position: 'relative', zIndex: 1, top: '62%', 
            width: '40%', left: '32%',height: '30%'}}>
              <div style={{width: "100%", height: '120%',  backgroundColor: 'black',opacity: 0.1, position: 'absolute'}}></div>
              <div style={{width: "100%", height: '40%', top: '80%', backgroundColor: 'black',opacity: 0.5, position: 'absolute'}}></div>
              <img src={card1} style={{objectFit: 'fill',height: '120%', width: '100%', position: 'absolute',zIndex:-1}} />
              <h4 style={{color: 'white', fontSize: '40px', position: 'absolute', zIndex: 2, top: '84%', left: '20%'}}>
              {langText[1].body[3]}</h4>
        </div>
        
      </div>
      <div id="blog" style={{display: 'flex', marginTop: '7%', flexDirection: 'column', justifyContent: 'center',
    alignItems: 'center'}}>
          <h2 style={{position: 'relative',right: '20%',color: "rgb(55, 55,100)"}}>{langText[1].body[5]}</h2>
          {initialPosts.map((item) => {
            return (<div key={item.id} style={{marginTop: '70px',
            border: '1px solid black'}}><div style={{position: 'relative', 
               width: '800px', height: '350px', background: '#033A42'}}>
                 <img src={item.img} style={{objectFit: 'cover',height: '100%', width: '40%', 
                 }} />
                 <Link to={{pathname: `/view/${item.id}`, state: {initialPosts}}}>
                   <div 
                 style={{position: 'absolute', zIndex: 2, top: '7%', left: '43%', width: '54%',
                 height: '88%'}}>
                   <h4 style={langText[1]}>{item.title}</h4>
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
           </div></div>);
          })}
          {posts.map((item) => {
           return (<div key={item.id} style={{marginTop: '70px',
           border: '1px solid black'}}><div style={{position: 'relative', 
              width: '800px', height: '350px', background: '#033A42'}}>
                <img src={item.img} style={{objectFit: 'cover',height: '100%', width: '40%', 
                }} />
                <Link to={{pathname: `/view/${item.id}`, state: {initialPosts}}}>
                  <div 
                style={{position: 'absolute', zIndex: 2, top: '7%', left: '43%', width: '54%',
                height: '88%'}}>
                  <h4 style={langText[1]}>{item.title}</h4>
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
        <Button style={{margin: '100px 0'}} outline color="primary"><Link style={{color: 'black'}} 
        to="/add">{langText[1].body[6]}</Link></Button>
      </div>

        <Navbar style={{position: 'absolute', top: 0, width: '100%', justifyContent: 'center', background:'#f2f2f2',
      boxShadow: '2px 2px 10px rgb(60,60,60)'}}>
          <Nav style={{width: '60%', justifyContent: 'space-around'}}>
          <NavItem>
            <NavLink href="/">{langText[0].navbar[0]}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#blog">{langText[0].navbar[1]}</NavLink>
          </NavItem>
          <NavItem >
            <NavLink href="#contacts">{langText[0].navbar[2]}</NavLink>
          </NavItem>
          <Dropdown isOpen={open} toggle={toggle}>
              <DropdownToggle caret>
                {lang}
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem onClick={changeLang}>English</DropdownItem>
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
        <Button color="success" style={{marginLeft: '10%'}} outline>{langText[1].body[7]}</Button>
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


