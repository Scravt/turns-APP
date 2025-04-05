
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import TakeTurn from './pages/takeTurn/TakeTurn'
import FinalMessageForm from './pages/finalMessageForm/FinalMessageForm'
import AdminControl from './pages/AdminControl/AdminControl'
import AdminConfig from './pages/AdminConfig/AdminConfig'
import EditAppoinmentes from './pages/editAppinments/EditAppoinmentes'

function App() {
  

  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/take-turn" element={<TakeTurn/>}/>
        <Route path="/final-message" element={<FinalMessageForm/> }/>
        <Route path="/admin" element={<AdminControl/>}/>
        <Route path="/adminConfig" element={<AdminConfig/>}/>
        <Route path="/admin/edit/:id" element={<EditAppoinmentes/>}/>
        <Route path="*" element={<h1>404</h1>}/>
      </Routes>
    </div>
  )
}

export default App
