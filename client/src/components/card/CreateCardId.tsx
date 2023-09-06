import { typeTripById } from "../Type";

export default function cardById(data: typeTripById) {
  return (
    <div className="cardId">
      <h2>{data.id}</h2>
      <h2>{data.name}</h2>
      <h3>{data.destination}</h3>
      <h3>{data.startDate}</h3>
      <h3>{data.endDate}</h3>
      <h3>{data.description}</h3>
      <h3>{data.price}</h3>
      <img src={data.image} alt={`${data.name} img`} width={300}  />
      <h3>{data.activities}</h3>
    </div>
  );
}
