import React, { Component } from 'react';
import Blogs from '../components/blogsList';
import Post from '../components/post';
import Header from '../components/header';
import About from '../components/about';
import Footer from '../components/footer';
import Test from '../components/test'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class Main extends Component {
    state = {}
    render() {
        return (
            <div>
                <Header />
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Blogs />
                        </Route>
                        <Route path="/about">
                            <Test />
                        </Route>
                        <Route path="/:slug" children={<Post />}/>
                          
                    </Switch>
                </Router>
            <Footer />
            </div>
        );
    }
}

export default Main;