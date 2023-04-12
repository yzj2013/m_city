import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Header from './Components/Header_footer/header';
import Footer from './Components/Header_footer/footer';
import Home from './Components/Home';
import SignIn from './Components/Signin';

const Routes = () => {
  return (
    <Router>
      {/* header */}
      <Header />
      <Switch>
        <Route path='/sign_in' exact component={SignIn} />
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
