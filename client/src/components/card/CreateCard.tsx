interface typeTrip {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  image: string;
}

export default function card(data: typeTrip): JSX.Element {
  return (
    <div className="card" >
      <h2>{data.id}</h2>
      <h2>{data.name}</h2>
      <h3>{data.destination}</h3>
      <h3>{data.startDate}</h3>
      <h3>{data.endDate}</h3>
      <img src={data.image} alt={`${data.name} img`} width={300}/>
    </div>
  );
}
