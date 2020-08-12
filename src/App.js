import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ArticleDetails from './components/articles/ArticleDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import AddFavourite from './components/articles/AddFavourite'
import Quiz from './components/quiz/Quiz'

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
            <Route path = '/my-library' component = { AddFavourite }/>
            <Route path = '/quiz' component = { Quiz }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
   }
 }

export default App;
