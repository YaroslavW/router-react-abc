import React, { Component } from 'react';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Blog from './components/Blog';

const history = createBrowserHistory();

class Menu extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/blog" component={Blog} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Menu;
