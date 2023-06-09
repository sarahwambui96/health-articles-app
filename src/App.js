import React from 'react';
import {Route, Switch} from "react-router-dom"
import Home from "./components/Home"
import ArticleList from "./components/ArticleList"
import NavBar from "./components/NavBar"
import Comments from "./components/Comments"
import './App.css';


function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/articlelist">
        <ArticleList />
        </Route>
        <Route  path ="/comments">
        <Comments/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
