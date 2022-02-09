// Create cloud function to convert the ISBN number to a link and save it in the database
// import { initializeApp } from 'firebase/app';
// import { connectFirestoreEmulator, getFirestore, collection, query } from 'firebase/firestore';
// import { getApp } from 'firebase/app';
// const firebaseConfig = {
//     apiKey: 'AIzaSyB2MG5n3LGysxwaahfD3iSGpnLoo8OETl8',
//     authDomain: 'fir-dev-test-123.firebaseapp.com',
//     projectId: 'firebase-dev-test-123',
//     storageBucket: 'firebase-dev-test-123.appspot.com',
//     messagingSenderId: '673278036983',
//     appId: '1:673278036983:web:2a0f985c90f0798d293cf2'
//   };
// initializeApp(firebaseConfig)

const functions = require('firebase-functions');
// const database = getFirestore(getApp());

// functions.http('add', (req, res) => {
//     await database.collection('books').add({
//         author: req.body.author,
//         title: req.body.title,
//         isbn: `https://covers.openlibrary.org/b/isbn/${ req.body.isbn }-S.jpg`
//     });
//     res.send(`Success`);
// });