var firebaseConfig = {
  apiKey: "AIzaSyAm_8QsHZSYVqKe0y0_3ualOeDGvriOvVY",
  authDomain: "la-boutique-del-anteojo.firebaseapp.com",
  projectId: "la-boutique-del-anteojo",
  storageBucket: "la-boutique-del-anteojo.appspot.com",
  messagingSenderId: "162396966417",
  appId: "1:162396966417:web:ab0ed9e25b499062fcebb0",
  measurementId: "G-24S34H4SWW",
};
function docReady(fn) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}
