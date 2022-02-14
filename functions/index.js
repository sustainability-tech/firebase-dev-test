// Create cloud function to convert the ISBN number to a link and save it in the database
import admin from 'firebase-admin';
import functions from 'firebase-functions';

const firebaseConfig = {
    apiKey: 'AIzaSyB2MG5n3LGysxwaahfD3iSGpnLoo8OETl8',
    authDomain: 'fir-dev-test-123.firebaseapp.com',
    projectId: 'firebase-dev-test-123',
    storageBucket: 'firebase-dev-test-123.appspot.com',
    messagingSenderId: '673278036983',
    appId: '1:673278036983:web:2a0f985c90f0798d293cf2'
  };
admin.initializeApp(firebaseConfig);
const db = admin.firestore();

export const book = functions.https.onRequest(async (req, res) => {
  switch(req.method) {
    case 'GET':
      res.status(403).send('Forbidden!');
      break;
    case 'POST':
      await db.collection('books').add(req.body);
      res.set('Access-Control-Allow-Origin', '*');
      res.status(200).send(`{status:"success", url:"https://covers.openlibrary.org/b/isbn/${req.body.isbn}-S.jpg"}`);
      break;
    default:
      res.status(405).send({error: 'Method not allowed'});
      break;
  }
  return "";
});