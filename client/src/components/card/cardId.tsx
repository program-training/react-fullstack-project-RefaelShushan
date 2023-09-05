interface typeTripById {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string[];
}

type Props = {
  trip: typeTripById;
};

export default function cardById(data: Props): JSX.Element {
  return (
    <div className="cardId">
      <h2>{data.trip.id}</h2>
      <h2>{data.trip.name}</h2>
      <h3>{data.trip.destination}</h3>
      <h3>{data.trip.startDate}</h3>
      <h3>{data.trip.endDate}</h3>
      <h3>{data.trip.description}</h3>
      <h3>{data.trip.price}</h3>
      <img src={data.trip.image} alt={`${data.trip.name} img`} width={300} />
      <h3>{data.trip.activities}</h3>
    </div>
  );
}
