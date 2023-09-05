import { useContext, useState } from "react";
import { PageContext } from "../App";
import { typeTrip } from "./Type";
import CreateCard from "../components/card/CreateCard";

type Props = {};

async function getTrips() {
  const resp = await fetch("http://localhost:3000/api/trips", {
    method: "GET",
  });
  const data = await resp.json();
  return data;
}

export default function Trips({}: Props) {
  const context = useContext(PageContext);
  getTrips().then((data) => setTrip(data));
  const [trip, setTrip] = useState<typeTrip[]>([]);
  if (context)
    return (
      <div>
        <div>
          <h1>welcome to Trips</h1>
          {trip.map((Data) => (
            <CreateCard
              id={Data.id}
              name={Data.name}
              destination={Data.destination}
              startDate={Data.startDate}
              endDate={Data.endDate}
              image={Data.image}
            ></CreateCard>
          ))}
        </div>
        <button onClick={() => context.setText("home")}>Home</button>
        <button onClick={() => context.setText("NewTrip")}>
          New Trip Form
        </button>
      </div>
    );
}
