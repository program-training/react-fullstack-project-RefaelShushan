import { useState,createContext } from 'react'
import Home from './components/Home'
import './App.css'
import '../src/components/card/card.css'
import Trips from './components/Trips'
import TripDetail from"./components/TripDetail"
import NewTripForm from './components/NewTripForm'
import UpdateTrip  from './components/UpdateTripForm'
import UserRegistration from './components/UserRegistration' 
import UserLogin from "./components/UserLogin"


export const PageContext = createContext<{page:string; setText:React.Dispatch<React.SetStateAction<string>>} |null>(null);



function App() {
  const [page ,setText ] = useState("home")

  return (
    <PageContext.Provider value={{page,setText}}>
   {page === "home" ? <Home/>:null}
   {page === "Trips" ? <Trips/>:null}
   {page === "TripDetail" ? <TripDetail/>:null}
   {page === "NewTrip" ? <NewTripForm/>:null}
   {page === "UpdateTrip " ? <UpdateTrip />:null}
   {page === "UserRegistration" ? <UserRegistration />:null}
   {page === "UserLogin" ? <UserLogin />:null}
   </PageContext.Provider>
  )
}

export default App
