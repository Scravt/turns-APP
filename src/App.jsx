
import { Route, Routes } from 'react-router-dom'
import Form from './components/forms/Form'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import TakeTurn from './pages/takeTurn/TakeTurn'
import FinalMessageForm from './pages/finalMessageForm/FinalMessageForm'
import AdminControl from './pages/AdminControl/AdminControl'
import AdminConfig from './pages/AdminConfig/AdminConfig'

function App() {
  

  return (
    <div className="h-screen w-screen  flex items-center justify-center bg-black text-white">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/take-turn" element={<TakeTurn/>}/>
        <Route path="/final-message" element={<FinalMessageForm/> }/>
        <Route path="/admin" element={<AdminControl/>}/>
        <Route path="/adminConfig" element={<AdminConfig/>}/>
      </Routes>
    </div>
  )
}

export default App
