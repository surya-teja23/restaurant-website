import React , { useState , useEffect , createContext , useContext} from 'react'
import { auth } from '../firebase'
import { 
  createUserWithEmailAndPassword ,
  signInWithEmailAndPassword ,
  signOut ,
  onAuthStateChanged ,
  GoogleAuthProvider ,
  signInWithPopup ,
  updateProfile
} from 'firebase/auth'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider( { children } ) {

  const [currentUser , setCurrentUser] = useState()
  const [currentDisplayName , setCurrentDisplayName] = useState('')
  const [loading , setLoading] = useState(true)

  function createAccount(email , password) {
    return createUserWithEmailAndPassword(auth , email , password)
  }

  function login(email , password) {
    return signInWithEmailAndPassword(auth , email , password)
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider()
    return signInWithPopup(auth , googleAuthProvider)
  }

  function logout() {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth , (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return () => {
      unsubscribe()
    }
  } , [])

  let value = {
    currentUser ,
    setCurrentDisplayName ,
    createAccount ,
    login ,
    googleSignIn ,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}