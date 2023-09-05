import {useContext,useState} from "react"
import  {PageContext}  from "../App";
import CardById from "../components/card/cardId";
import { typeTripById } from "./Type";

type Props = {}

export async function getTripById(id: string) {
  const promiseData = await fetch(`http://localhost:8080/api/trips/${id}`);
  const trip = await promiseData.json();
  return trip;
}
export default function TripDetail({}: Props) {
  const context = useContext(PageContext);
  const id = "10";
  getTripById(id).then((trip) => setTrip(trip));
  const [trip, setTrip] = useState<typeTripById>();
  if (context && trip)
    return (
      <div>
        <h1>welcome to Trip Detail</h1>
        <CardById trip={trip}></CardById>
        <button onClick={() => context.setText("Trips")}>All Trips</button>
      </div>
    );
}










// export default function TripDetail({}: Props) {
//     const context = useContext(PageContext)
//     if (context)
//   return (
//     <div><button onClick={()=> context.setText("Trips")}>All trips</button></div>
//   )
// }