import { useState, createContext } from "react";
import Home from "./components/Home";
import "./App.css";
import "../src/components/card/card.css";
import Trips from "./components/Trips";
import TripDetail from "./components/TripDetail";
import NewTripForm from "./components/NewTripForm";
import UpdateTripForm from "./components/UpdateTripForm";
import UserRegistration from "./components/UserRegistration";
import UserLogin from "./components/UserLogin";
// import { typeTripById } from "./components/card/CreateCardId";

export const PageContext = createContext<{
  page: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

export const TypeTripByIdContext = createContext<{
  trip: string;
  setTripById: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

function App() {
  const [page, setText] = useState("home");
  const [trip, setTripById] = useState("");

  return (
    <PageContext.Provider value={{ page, setText }}>
      <TypeTripByIdContext.Provider value={{trip, setTripById}}>
        {page === "home" ? <Home /> : null}
        {page === "Trips" ? <Trips /> : null}
        {page === "NewTrip" ? <NewTripForm /> : null}
        {page === "UpdateTrip" ? <UpdateTripForm /> : null}
        {page === "UserRegistration" ? <UserRegistration /> : null}
        {page === "UserLogin" ? <UserLogin /> : null}
        {page === "TripDetail" ? <TripDetail /> : null}
      </TypeTripByIdContext.Provider>
    </PageContext.Provider>
  );
}

export default App;
