import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/SideNavbar'
import Dashboard from './components/dashboard/Dashboard'
import ArticleDetails from './components/articles/ArticleDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import PHQ9 from './components/quiz/PHQ9/PHQ9'
import GAD7 from './components/quiz/GAD7/GAD7'
import MyLibrary from './components/articles/MyLibrary';
import AtlasLibrary from './components/articles/AtlasLibrary';

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
            <Route path = '/phq9' component = { PHQ9 }/>
            <Route path = '/gad7' component = { GAD7 }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
   }
 }

export default App;
