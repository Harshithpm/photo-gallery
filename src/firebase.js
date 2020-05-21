import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDvE3gIFfZSk24fbkBm1nLzNBPI-jAYeoY',
  authDomain: 'photo-gallery-ca19a.firebaseapp.com',
  databaseURL: 'https://photo-gallery-ca19a.firebaseio.com',
  projectId: 'photo-gallery-ca19a',
  storageBucket: 'photo-gallery-ca19a.appspot.com',
  messagingSenderId: '112734252008',
  appId: '1:112734252008:web:8bef6ec2e75f1ce5c0525d',
  measurementId: 'G-DPDM0WFLCP',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const storage = firebase.storage();
