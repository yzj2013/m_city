import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css';
import { firebase } from './firebase';
import Routes from './routes';

const App = (props) => {
  return <Routes {...props} />;
};

// ReactDOM.render(
//   <React.StrictMode></React.StrictMode>,
//   document.getElementById('root')
// );

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  ReactDOM.render(<App user={user}></App>, document.getElementById('root'));
});
