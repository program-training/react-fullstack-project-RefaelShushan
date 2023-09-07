import { useContext, useState, useEffect } from "react";
import { PageContext, TypeTripByIdContext } from "../App";
import CardById from "./card/CreateCardId";
import { typeTripById } from "./Type";

type Props = {};

export async function getTripById(id: string) {
  const promiseData = await fetch(`http://localhost:3000/api/trips/${id}`);
  const dataId = await promiseData.json();
  return dataId;
}
export default function TripDetail({}: Props) {
  const context = useContext(PageContext);
  const typeTripByIdContext = useContext(TypeTripByIdContext);
  if (typeTripByIdContext)
    useEffect(() => {
      getTripById(typeTripByIdContext.trip).then((trip) => setTrip(trip));
    },[]);
  const [trip, setTrip] = useState<typeTripById>();
  if (context && trip)
    return (
      <div>
         <button onClick={() => context.setText("Trips")}>All Trips</button>
        <button onClick={() => context.setText("UpdateTrip")}>update</button>
        <h1>welcome to Trip Detail</h1>
        <CardById
          key={trip.id}
          id={trip.id}
          name={trip.name}
          destination={trip.destination}
          startDate={trip.startDate}
          endDate={trip.endDate}
          description={trip.description}
          price={trip.price}
          image={trip.image}
          activities={trip.activities}
        />
       
      </div>
    );
  }  