import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import TattooPage from './pages/TattooPage';

class Router extends Component {
  render() {
    const landingPage = (props) => {
      return (
        <LandingPage 
          {...props}
          {...this.props}
        />
      );
    };

    const tattooPage = (props) => {
      return (
        <TattooPage 
          {...props}
          {...this.props}
        />
      );
    };

    return (
      <main>
        <Switch>
          <Route exact path='/' component={landingPage}/>
          <Route exact path='/tattoo' component={tattooPage}/>
        </Switch>
      </main>
    );
  }
}

export default Router;