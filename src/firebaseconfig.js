import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const firebaseConfig = ({
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
    this.storage = firebase.storage();
  }

  getAuth() {
    return this.auth;
  }

  getDB() {
    return this.db;
  }

  getStorage() {
    return this.storage;
  }

  logout() {
    return this.auth.signOut();
  }

  // might need to change for private router
  onAuthStateChangedGetCurrentUser() {
    let currentUser = null;
    this.auth.onAuthStateChanged((user) => {
      currentUser = user;
    });
    return currentUser;
  }

  addLinksToUser({ spotlightLabel, spotlightLink, collectedLinks }) {
    const user = this.auth.currentUser;
      if (user) {
        return this.db.collection('users').doc(user.displayName).set({
          spotlightLabel: spotlightLabel,
          spotlightLink: spotlightLink,
          links: collectedLinks
        });
      } else {
        console.log('not logged in')
      }
  }

  async getUserInfo (username) {
    return await this.db.collection("users").doc(username).get().then(doc => {
      if (doc.exists) {
        return { 
          username: username, 
          links: doc.data().links, 
          spotlightLabel: doc.data().spotlightLabel, 
          spotlightLink: doc.data().spotlightLink 
        };
      } else {
        return { exists: false }
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
  }

  isLoggedIn() {
    const user = this.auth.currentUser;
    if (user) {
      return true;
    }
    return false;
  }

  getCurrentUsername() {    
    const user = this.auth.currentUser;
    if (user) {
      return user;
    } 
    return null;
  }
  
  pfpRemove(username) {
    this.storage.ref().child(`profile_pictures/${username}/pfp`).delete(); //.then() to continue
  }

  pfpGet(username) {
    return this.storage.ref(`profile_pictures/${username}/pfp`).getDownloadURL();
  }
};

export default new Firebase();
