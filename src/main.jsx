import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import LoginPage from './component/LoginPage/LoginPage.jsx'
import SignupPage from './component/SignupPage/SignupPage.jsx'
import UserProfile from './component/Profile/UserProfile.jsx'
import { User } from 'lucide-react'


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<LoginPage/>} />
      <Route path='sign-up' element={<SignupPage/>}/>
      <Route path='userprofile/:userId' element={<UserProfile/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
