import firebase from 'firebase/app'

import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDSWe15kZggx9iYayYEk1IcvKGNvB25ziU",
    authDomain: "cooking-ninja-bc80a.firebaseapp.com",
    projectId: "cooking-ninja-bc80a",
    storageBucket: "cooking-ninja-bc80a.appspot.com",
    messagingSenderId: "1016475852248",
    appId: "1:1016475852248:web:9a0d789a66f8340e25e6ad"
  };

  // init firebase

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()

  export {projectFirestore}