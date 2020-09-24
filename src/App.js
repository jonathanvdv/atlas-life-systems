import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ArticleDetails from './components/articles/ArticleDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
// import AddFavorite from './components/articles/AddFavorite'
import Quiz from './components/quiz/Quiz'
import MyLibrary from './components/articles/MyLibrary';
import AtlasLibrary from './components/articles/AtlasLibrary';
import '../public/manifest.json';

class App extends Component { 
  render(){ 
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path = '/' component = { Dashboard }/>
            <Route path = '/article/:article_id' component = { ArticleDetails }/>
            <Route path = '/signin' component = { SignIn }/>
            <Route path = '/signup' component = { SignUp }/>
            <Route path = '/atlas-library' component = { AtlasLibrary }/>
            <Route path = '/my-library' component = { MyLibrary }/>
            <Route path = '/quiz' component = { Quiz }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
   }
 }

export default App;
