import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from "./home/Main";
import About from "./pages/About";
import Admission from "./pages/Admission";
import Homepage from "./pages/Homepage";
import Header from './home/Header';
import Results from './pages/Results';
import Search from './pages/Search';
import Nav from './home/Nav';
import Navbar from './home/matrialui/Navbar'

export default function Home(){
    return(
        <Router>
            <>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route path="/Admission" component={Results}/>
                <Route path = "/Results" component={Search}/>
                <Route path = "/About" component={About}/>
            </Switch>
            </>
        </Router>
    )
};
