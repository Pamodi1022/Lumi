const admin = require('firebase-admin');
const serviceAccount = require('../firebase-adminsdk.json'); // Your Firebase service account JSON

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://lumi-1022.firebaseio.com", // Replace with your Firebase URL
//   storageBucket: "agrovital-cs98-iit.appspot.com", // Replace with your Firebase storage bucket
  projectId: "lumi-1022" // Replace with your Firebase project ID
});

const db = admin.firestore();
module.exports = db; 