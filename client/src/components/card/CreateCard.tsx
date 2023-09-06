import { useContext } from "react";
import { PageContext, TypeTripByIdContext } from "../../App";
import { typeTrip } from "../Type";

export default function card(data: typeTrip) {
  const context = useContext(PageContext);
  const typeTripByIdContext = useContext(TypeTripByIdContext);

  async function handleDelete(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) {
    event.stopPropagation();
    await fetch(`http://localhost:3000/api/trips/${id}`, {
      method: "DELETE",
      headers: { Authorization: "test-token" },
    });
  }

  if (context && typeTripByIdContext)
    return (
      <div
        className="card"
        onClick={() => [
          context.setText("TripDetail"),
          typeTripByIdContext.setTripById(data.id),
        ]}
      >
        <h2>{data.id}</h2>
        <h2>{data.name}</h2>
        <h3>{data.destination}</h3>
        <h3>{data.startDate}</h3>
        <h3>{data.endDate}</h3>
        <img
          src={data.image}
          alt={`${data.name} img`}
          width={300}
          height={200}
        />
        <button
          onClick={(e) => {
            handleDelete(e, data.id);
          }}
        >
          Delete
        </button>
      </div>
    );
}
