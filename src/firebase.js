import firebase from 'firebase/app';

import 'firebase/auth';

import 'firebase/firestore';

import 'firebase/storage';

// import { cityDb } from './temp/m-city-export';

const firebaseConfig = {
  apiKey: 'AIzaSyByRHZj_ND601u6wHnaSwP_5r-ERiZrLLQ',
  authDomain: 'mcity-9eb07.firebaseapp.com',
  projectId: 'mcity-9eb07',
  storageBucket: 'mcity-9eb07.appspot.com',
  messagingSenderId: '447012322996',
  appId: '1:447012322996:web:4cd824f7356d00f504e1e1',
  measurementId: 'G-GT6DZYCS1F',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const DB = firebase.firestore();

const matchesCollection = DB.collection('matches');
const playersCollection = DB.collection('players');
const positionsCollection = DB.collection('positions');
const promotionsCollection = DB.collection('promotions');
const teamsCollection = DB.collection('teams');

// cityDb.matches.forEach((item) => {
//   matchesCollection.add(item);
// });

// cityDb.players.forEach((item) => {
//   playersCollection.add(item);
// });

// cityDb.positions.forEach((item) => {
//   positionsCollection.add(item);
// });

// cityDb.promotions.forEach((item) => {
//   promotionsCollection.add(item);
// });

// cityDb.teams.forEach((item) => {
//   teamsCollection.add(item);
// });

export {
  firebase,
  matchesCollection,
  playersCollection,
  positionsCollection,
  promotionsCollection,
  teamsCollection,
};
