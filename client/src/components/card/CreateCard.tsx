import { useContext } from "react";
import { PageContext, TypeTripByIdContext } from "../../App";
import { typeTrip } from "../Type";

interface Props extends typeTrip{
  handleDelete:(id:string)=>void
} 

export default function Card(data: Props) {
  const context = useContext(PageContext);
  const typeTripByIdContext = useContext(TypeTripByIdContext);

  
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
            e.stopPropagation();
            data.handleDelete(data.id);
          }}
        >
          Delete
        </button>
      </div>
    );
}
