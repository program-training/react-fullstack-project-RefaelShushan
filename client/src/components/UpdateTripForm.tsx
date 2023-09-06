import { useContext,useState } from "react";
import { PageContext } from "../App";
import { typeTripById } from "./Type";
import { TypeTripByIdContext } from "../App";
// const [trip, setTripById] = useState("");
type Props = {};

async function updateTrip(typeFullTrip: typeTripById,id:string) {
  await fetch(`http://localhost:3000/api/trips/${id}`, {
    method: "PUT",
    headers: { Authorization: "test-token","content-type":"application/json" },
    body: JSON.stringify(typeFullTrip),
  });
}

export default function UpdateTripForm({}: Props) {
  const context = useContext(PageContext);
  const tripContext = useContext(TypeTripByIdContext);
  // const pageContext = useContext(PageContext);
  const [newTrip, setNewTrip] = useState<typeTripById>({
    key: "",
    id: "",
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
    description: "",
    price: 0,
    image: "",
    activities: [],
  });
  if (context)
  if(tripContext)
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="key"
            onChange={(e) => setNewTrip({ ...newTrip, key: e.target.value })}
          ></input>
          <input
            type="text"
            placeholder="id"
            onChange={(e) => setNewTrip({ ...newTrip, id: e.target.value })}
          ></input>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setNewTrip({ ...newTrip, name: e.target.value })}
          ></input>
          <input
            type="text"
            placeholder="destination"
            onChange={(e) =>
              setNewTrip({ ...newTrip, destination: e.target.value })
            }
          ></input>
          <input
            type="text"
            placeholder="startDate"
            onChange={(e) =>
              setNewTrip({ ...newTrip, startDate: e.target.value })
            }
          ></input>
          <input
            type="text"
            placeholder="endDate"
            onChange={(e) =>
              setNewTrip({ ...newTrip, endDate: e.target.value })
            }
          ></input>
          <input
            type="text"
            placeholder="description"
            onChange={(e) =>
              setNewTrip({ ...newTrip, description: e.target.value })
            }
          ></input>
          <input
            type="number"
            placeholder="price"
            onChange={(e) =>
              setNewTrip({ ...newTrip, price: Number(e.target.value) })
            }
          ></input>
          <input
            type="text"
            placeholder="image"
            onChange={(e) => setNewTrip({ ...newTrip, image: e.target.value })}
          ></input>
          <input
            type="text"
            placeholder="activities"
            onChange={(e) =>
              setNewTrip({ ...newTrip, activities: Array(e.target.value) })
            }
          ></input>
          <input type="submit" onClick={() => updateTrip(newTrip,tripContext.trip)}></input>
        </form>
        <button onClick={() => context.setText("Trips")}>All trips</button>
      </div>
    );
}
