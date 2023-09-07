import { useContext, useState, useEffect } from "react";
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

  const [trip, setTrip] = useState<typeTrip[]>([]);
  useEffect(() => {
    getTrips().then((data) => setTrip(data));
  }, []);

  async function handleDelete(id: string) {
    await fetch(`http://localhost:3000/api/trips/${id}`, {
      method: "DELETE",
      headers: { Authorization: "test-token" },
    });
    getTrips().then((data) => setTrip(data));
  }

  if (context)
    return (
      <div>
        <button onClick={() => context.setText("home")}>Home</button>
        <button onClick={() => context.setText("NewTrip")}>
          New Trip Form
        </button>
        <div>
          <h1>welcome to Trips</h1>
          {trip.map((Data) => (
            <CreateCard
              key={Data.id}
              id={Data.id}
              name={Data.name}
              destination={Data.destination}
              startDate={Data.startDate}
              endDate={Data.endDate}
              image={Data.image}
              handleDelete={(id) => handleDelete(id)}
            ></CreateCard>
          ))}
        </div>
      </div>
    );
}
