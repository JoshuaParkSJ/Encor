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

  async login(email, password) {
    await this.auth.signInWithEmailAndPassword(email, password).then(user => {
      console.log('logged in');
    });
  }

  logout() {
    return this.auth.signOut();
  }

  async register(username, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: username,
    });
  };

  // might need to change for private router
  onAuthStateChangedGetCurrentUser() {
    let currentUser = null;
    this.auth.onAuthStateChanged((user) => {
      currentUser = user;
    });
    return currentUser;
  }

  addLinksToUser({ spotlightLabel, spotlightLink, links }) {
    const user = this.auth.currentUser;
      if (user) {
        console.log(user);
        this.db.collection('users').doc(user.displayName).set({
          spotlightLabel: spotlightLabel,
          spotlightLink: spotlightLink,
          links: links,
        }).then(() => {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
      } else {
        console.log('not logged in')
      }
  }

  createUserDB () {
    this.auth.onAuthStateChanged(user => {
      if (user && user.displayName) {
        this.db.collection('users').doc(user.displayName).set({
          links: null,
        })
        console.log('db created');
      }
    });
  }

  async getUserInfo (username) {
    return await this.db.collection("users").doc(username).get().then(doc => {
      if (doc.exists) {
        return { 
          exists: true, 
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
    // this.auth.onAuthStateChanged(user => {
    //   if (user) {
    //     return true;
    //   }
    // })
    // return false;
  }

  getCurrentUsername() {
    const user = this.auth.currentUser;
    if (user) {
      return user.displayName;
    }
    return null;
  }

  fileUpload(file) {
    this.storage.ref('profile_pictures/' + file.name).put(file);
  }
  
};

export default new Firebase();
