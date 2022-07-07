import React, { Component } from 'react';
import Blogs from './components/blogsList';
import Post from './components/post';
import Header from './components/header';
import About from './components/about';
import Footer from './components/footer';
import Test from './components/test'
import {
  BrowserRouter as Routers,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  state = {}
  render() {
    return (
      <>
        <Header />
        <Routers>

          <Switch>
            <Route exact path='/about' children={< About />} />
            <Route exact path="/blog/:slug" children={<Post/>}/>
            <Route path="/:offset?" children={<Blogs />} />
          </Switch>
        </Routers>
        <Footer />
      </>
    );
  }
}

export default App;
