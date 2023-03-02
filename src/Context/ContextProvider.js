import React , { useState , createContext , useContext} from 'react'
export const ContextAPI = createContext()

export function useValues() {
  return useContext(ContextAPI)
}

export default function ContextProvider( { children } ) {
  
  window.addEventListener('resize' , function() {setWindowInnerWidth(this.window.innerWidth)})
  const [windowInnerWidth , setWindowInnerWidth] = useState(window.innerWidth)

  let value = {
    windowInnerWidth  
  }
  return (
    <ContextAPI.Provider value={value}>
      {children}
    </ContextAPI.Provider>
  )
}
