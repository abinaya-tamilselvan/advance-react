import React from 'react'
import About from './About';
import NavBar from './NavBar';
import Error from "/Error";
import People from "./People";
import Person from "./person";
import Home from "./Home";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";//
//we want to use our router we page 

function ReactRouterDom(){
     return (
         <Router>
             <Route path="/">
                 <Home />
             </Route>
             <Route path="/">
                 <About />
             </Route>
             <Route path="/">
                 <Error />
             </Route>
             <Route path="/">
                 <People />
             </Route>
         </Router>
     )
}

export default ReactRouterDom
