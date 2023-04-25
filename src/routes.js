import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthGuard from './Hoc/Auth';

import Header from './Components/Header_footer/header';
import Footer from './Components/Header_footer/footer';
import Home from './Components/Home';
import SignIn from './Components/Signin';
import TheTeam from './Components/theTeam';

import Dashboard from './Components/Admin/Dashboard';
import AdminPlayers from './Components/Admin/players';
import AddEditPlayers from './Components/Admin/players/addEditPlayers';
import AdminMatches from './Components/Admin/matches/index';
import AddEditMatch from './Components/Admin/matches/addEditMatch';

const Routes = ({ user }) => {
  return (
    <Router>
      {/* header */}
      <Header user={user} />
      <Switch>
        <Route
          path='/admin_matches/edit_match/:matchid'
          exact
          component={AuthGuard(AddEditMatch)}
        />
        <Route
          path='/admin_matches/add_match'
          exact
          component={AuthGuard(AddEditMatch)}
        />
        <Route
          path='/admin_matches'
          exact
          component={AuthGuard(AdminMatches)}
        />
        <Route
          path='/admin_players/edit_player/:playerid'
          exact
          component={AuthGuard(AddEditPlayers)}
        />
        <Route
          path='/admin_players/add_player'
          exact
          component={AuthGuard(AddEditPlayers)}
        />
        <Route
          path='/admin_players'
          exact
          component={AuthGuard(AdminPlayers)}
        />
        <Route path='/dashboard' exact component={AuthGuard(Dashboard)} />
        <Route path='/the_team' exact component={TheTeam} />
        <Route
          path='/sign_in'
          exact
          component={(props) => <SignIn {...props} user={user} />}
        />
        <Route path='/' exact component={Home} />
      </Switch>
      <ToastContainer></ToastContainer>
      <Footer />
    </Router>
  );
};

export default Routes;
