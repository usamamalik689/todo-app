import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from "./Home"
import Form from './Form'
import Update from "./Update"
import {Link,Routes,Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Form' element={<Form />}/>
      <Route path='/Home' element={<Home />}/>
      <Route path='/Update' element={<Update />}/>
    </Routes>
  )
}

export default App
