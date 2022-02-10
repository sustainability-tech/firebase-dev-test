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

export const saveBook = functions.https.onRequest(async (req, res) => {
    const {isbn, author, title} = req.body;
    if (!isbn) {
        res.status(400).send('ISBN is required');
        return;
    }
    if (!author) {
        res.status(400).send('Author is required');
        return;
    }
    if (!title) {
        res.status(400).send('Title is required');
        return;
    }
    const url = `https://isbnsearch.org/isbn/${isbn}`;
    const newBook = {
        author, isbn, title, url
    }
    const bookResult = await admin.firestore().collection('books').add(newBook);
    const bookId = bookResult.id;
    const messageResult = `{id:${bookId}, url:${url}}`;
    res.status(200).send(messageResult);
});
