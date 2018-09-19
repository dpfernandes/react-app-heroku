
import logoThread from './images/thread.jpg';
import './App.css';
import React, { Component } from "react";
import {
          Route,
          NavLink,
          BrowserRouter
        } from "react-router-dom";
import Home from "./menu/Home";
import Goals from ".//menu/Goals";
import Agenda from ".//menu/Agenda";
import Groups from ".//menu/Groups";
import Mockaroo from ".//menu/Mockaroo";
import Stories from ".//menu/Stories";
import Articles from ".//menu/Articles";
import Toolstech from ".//menu/Toolstech";


class App extends Component {
  render() {
    return (
    
      <div className="App">
        <header className="App-header">
          <img src={logoThread} className="App-logoThread" alt="logoThread" /> 
          <h1>Project Thread - Class05 - Hack Your Future</h1>
        </header>
        <BrowserRouter>
          <div>
          <p className="App-intro">
        
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/goals">Goals</NavLink></li>
              <li><NavLink to="/agenda">Agenda</NavLink></li>
              <li><NavLink to="/groups">Work Groups</NavLink></li>
              <li><NavLink to="/mockaroo">Mockaroo</NavLink></li>
              <li><NavLink to="/stories">User Stories</NavLink></li>
              <li><NavLink to="/articles">Articles</NavLink></li>
              <li><NavLink to="/tools-tech">Tools &amp; Technologies</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/goals" component={Goals}/>
              <Route path="/agenda" component={Agenda}/>
              <Route path="/groups" component={Groups}/>
              <Route path="/mockaroo" component={Mockaroo}/>
              <Route path="/stories" component={Stories}/>
              <Route path="/articles" component={Articles}/>
              <Route path="/tools-tech" component={Toolstech}/>   
            </div>
          </p>
         </div>
        </BrowserRouter>
       
      </div>
    );
  }
}


export default App;