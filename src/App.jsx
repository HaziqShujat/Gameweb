import React, { useEffect, useState } from 'react'

import './App.css'
import Home from './pages/Home'
import Header from './Components/Header'
import { Themecontext } from './Context/Themcontext'

function App() {
  const [theme , setTheme] = useState('light')
  useEffect(()=>{
    setTheme(localStorage.getItem('theme')? localStorage.getItem('theme'):'' )
  },[])
 

  return (

    <Themecontext.Provider value={{theme,setTheme}}>

    <div className= {`${theme} ${theme=='dark'? 'bg-slate-900':null } min-h-[100vh]`} >
    <Header/>
   <Home/>
    </div>
    </Themecontext.Provider>
  )
}

export default App
