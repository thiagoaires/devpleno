import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBq4fpLHlWfMaBDr2sQFEqtxlQbznP-24c",
  authDomain: "reactjs-28548.firebaseapp.com",
  databaseURL: "https://reactjs-28548.firebaseio.com",
  projectId: "reactjs-28548",
  storageBucket: "reactjs-28548.appspot.com",
  messagingSenderId: "373262953905"
})

const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export default base