import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from './HomePage.js'
import ListPage from './ListPage.js'
import ListItem from './ListItem.js'
import AboutMePage from './AboutMePage.js'


export default class App extends Component {
  render() {
      return (
          <div>
              <Router>
                  <Switch>
                      <Route 
                          path="/" 
                          exact
                          render={(routerProps) => <HomePage {...routerProps} />} 
                      />
                      <Route 
                          path="/listpage" 
                          render={(routerProps) => <ListPage {...routerProps} />} 
                      />
                      <Route
                          path="/listitem/:id"
                          render={(routerProps) => <ListItem {...routerProps} />}
                      />
                        <Route
                          path="/aboutme"
                          render={(routerProps) => <AboutMePage {...routerProps} />}
                      />
                  </Switch>
              </Router>
          </div>
      )
  }
}