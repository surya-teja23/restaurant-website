import React , { useState , useRef } from 'react'
import { FaUser , FaEnvelope , FaLock } from 'react-icons/fa'
import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthProvider'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const { createAccount , updateName , googleSignIn } = useAuth()
  const navigate = useNavigate()
  const displayName = useRef()
  const email = useRef()
  const password = useRef()
  const confirmPassword = useRef()
  const [error, setError] = useState('')
  const [isLoading , setIsLoading] = useState(false)

  async function handleSubmit(e) {
    if(displayName.current.value === '') {
      return setError('Name cannot be empty')
    }

    if (password.current.value !== confirmPassword.current.value) {
      return setError("Passwords do not match")
    }
    try {
      setIsLoading(true)
      setError('')
      await createAccount(email.current.value , password.current.value)
      await updateName(displayName.current.value)
      navigate('/homepage')
    } catch(error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleGoogleSignIn() {
    setIsLoading(true)
    setError('')
    try {
      await googleSignIn()
      navigate('/homepage')
    } catch(error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center text-center'
    style={
        {backgroundImage: "url('./images/background.jpg')" , 
        backgroundSize: 'cover' , 
        minHeight: '100vh' ,
        backgroundPosition: 'center' ,
        backgroundRepeat: 'no-repeat' ,
        backgroundAttachment: 'fixed'}}>
      <div className='w-100' style={{maxWidth: '400px'}}>
        <div className='py-5 px-4 rounded-3' style={{backgroundColor: 'rgba(245, 245, 220, 1)'}}>
          <h1 className=' mb-4 text-decoration-underline'>Sign Up</h1>
          {error && <div className="alert alert-danger" role="alert">{error}</div> }
          <div className='input-group mb-4'>
            <div className='input-group-text fs-3'><FaUser /></div>
            <div className='form-floating'>
              <input ref={displayName} className='form-control' placeholder='Email' />
              <label>Enter name...</label>
            </div>
          </div>
          <div className='input-group mb-4'>
            <div className='input-group-text fs-3'><FaEnvelope /></div>
            <div className='form-floating'>
              <input type='email' ref={email} className='form-control' placeholder='Email' />
              <label>Enter Email...</label>
            </div>
          </div>
          <div className='input-group mb-3'>
            <div className='input-group-text fs-3'><FaLock /></div>
            <div className='form-floating'>
              <input type='password' ref={password} className='form-control' placeholder='password' />
              <label>Enter password...</label>
            </div>
          </div>
          <div className='input-group mb-3'>
            <div className='input-group-text fs-3'><FaLock /></div>
            <div className='form-floating'>
              <input ref={confirmPassword} type='password' className='form-control' placeholder='password' />
              <label>Confirm password...</label>
            </div>
          </div>

          <p className='mb-4'>Already have an account ? <Link to='/login'>Login</Link></p>
          <button onClick={handleSubmit} disabled={isLoading} className='btn btn-primary btn-lg w-75 mx-auto fw-bold'>SignIn</button>
          <p className='mt-3 fs-4 fw-bold'> ( OR ) </p>
          <GoogleButton onClick={handleGoogleSignIn} disabled={isLoading} className='mx-auto'  />
        </div>
      </div>
    </div>
  )
}
