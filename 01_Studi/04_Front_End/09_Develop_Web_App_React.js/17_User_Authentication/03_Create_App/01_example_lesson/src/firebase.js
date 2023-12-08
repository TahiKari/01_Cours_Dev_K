import { initializeApp } from 'firebase/app'
import {
  getAuth, // Gère l'authentification
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from 'firebase/auth'
import {
  getFirestore,
  collection, // sert a gérer les nouveau utilisateur
  addDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDp1KuhjrQZgzBJe9OUYvIuriqXPwy-4D8',
  authDomain: 'example-lesson-a3fe8.firebaseapp.com',
  projectId: 'example-lesson-a3fe8',
  storageBucket: 'example-lesson-a3fe8.appspot.com',
  messagingSenderId: '809257126164',
  appId: '1:809257126164:web:94e3b19a15635f500d9a01'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const logIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error)
  }
}

const registerUser = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      authProvider: 'local',
      email
    })
  } catch (error) {
    console.log(error)
  }
}

const resetPassword = async email => {
  try {
    await sendPasswordResetEmail(auth, email)
    alert('Mail de réinitialisation envoyé !')
  } catch (error) {
    console.log(error)
  }
}

const logOut = () => {
  signOut(auth)
}

export {
  auth,
  db,
  logIn,
  registerUser,
  resetPassword,
  logOut
}
