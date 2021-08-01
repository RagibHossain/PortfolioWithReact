import React, { useState } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import ModeSelector from './Components/ModeSelector'
import { useContext } from 'react'
import { MainstoreContext } from './Stores/mainStore'
import { observer } from 'mobx-react-lite'
const App = () => {
  const darkMode = {
  backgroundColor:"#151515",
  color:"white",
  transition: "0.5s"
  }
  const lightMode = {
    backgroundColor:"white",
    color:"#151515",
    transition: "0.5s"
  }
  const store = useContext(MainstoreContext);
  const {lightMode : light,setMode} = store;
  return (
    <div style={light ? lightMode : darkMode }>
      <ModeSelector setMode={setMode}/>
      <Nav />
      <Home />   
    </div>
  )
}

export default observer(App)
