import firebase from 'firebase/app';

import 'firebase/auth';

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

export { firebase };
