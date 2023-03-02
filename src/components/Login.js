import React , { useState , useRef } from 'react'
import { FaEnvelope , FaLock } from 'react-icons/fa'
import GoogleButton from'react-google-button'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthProvider'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const { login , googleSignIn } = useAuth()
  const navigate = useNavigate()
  const email = useRef()
  const password = useRef()
  const [error, setError] = useState('')
  const [isLoading , setIsLoading] = useState(false)

  async function handleSubmit() {
    setIsLoading(true)
    setError('')
    try {
      await login(email.current.value , password.current.value)
      navigate('/homepage')
    } catch(error) {
      setError(error.message.slice(10))
      // console.error(error.message)
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

  function handleAlert() {
    setError('')
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
        <div className='py-5 px-4 rounded-3' style={{backgroundColor: '#f5f5dc'}}>
          <h1 className=' mb-4 text-decoration-underline'>Login</h1>
          {error && 
            <div className="text-start alert alert-danger alert-dismissible fade show" role="alert">
              {error}
              <button onClick={handleAlert} className='btn-close' data-bs-dismiss='alert' aria-label='close' />
            </div> }
          <div className='input-group mb-4'>
            <div className='input-group-text fs-3'><FaEnvelope /></div>
            <div className='form-floating'>
              <input ref={email} type='email' className='form-control' placeholder='Email' />
              <label>Enter Email...</label>
            </div>
          </div>
          <div className='input-group mb-3'>
            <div className='input-group-text fs-3'><FaLock /></div>
            <div className='form-floating'>
              <input ref={password} type='password' className='form-control' placeholder='password' />
              <label>Enter password...</label>
            </div>
          </div>

          <p className='mb-4'>Don't have an account ? <Link to='/signup'>SignUp</Link></p>
          <button onClick={handleSubmit} disabled={isLoading} className='btn btn-primary btn-lg w-75 mx-auto fw-bold'>Login</button>
          <p className='mt-3 fs-4 fw-bold'> ( OR ) </p>
          <GoogleButton onClick={handleGoogleSignIn} disabled={isLoading} className='mx-auto'  />
        </div>
      </div>
    </div>
  )
}
