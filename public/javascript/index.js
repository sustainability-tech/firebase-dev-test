import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { getApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyB2MG5n3LGysxwaahfD3iSGpnLoo8OETl8',
  authDomain: 'fir-dev-test-123.firebaseapp.com',
  projectId: 'firebase-dev-test-123',
  storageBucket: 'firebase-dev-test-123.appspot.com',
  messagingSenderId: '673278036983',
  appId: '1:673278036983:web:2a0f985c90f0798d293cf2'
};

console.debug('Initialize APP');
getAnalytics(initializeApp(firebaseConfig));

import lagoonroad from './extensions/lagoonroad';
import home from './components/home';
import addBook from './components/addBook';
import books from './components/books';

if (window.location.hostname === 'localhost') {
  console.debug('Running in emulator mode');
  connectFirestoreEmulator(getFirestore(getApp()), 'localhost', 8080);
}

const update = lagoonroad(
  home,
  addBook,
  books,
);

console.log(`Init Lagoon Road: ${ window.location.pathname }`);
update(window.location.pathname);