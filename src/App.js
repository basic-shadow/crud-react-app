import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/AddBlog';
import ViewBlog from './components/ViewBlog';
import EditBlog from './components/EditBlog';

import 'bootstrap/dist/css/bootstrap.min.css';

import {GlobalProvider} from './context/GlobalState';


export default function App() {
  return (
    <div>
      <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={Add} />
          <Route path="/view/:id" component={ViewBlog} />
          <Route path="/edit/:id" component={EditBlog} />
        </Switch>
      </Router>
      </GlobalProvider>
    </div>
  );
}


