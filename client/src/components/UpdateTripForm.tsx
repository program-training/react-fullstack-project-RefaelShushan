import {useContext} from "react"
import  {PageContext}  from "../App";


type Props = {}

export default function UpdateTripForm({}: Props) {
    const context = useContext(PageContext)
    if (context)
  return (
    <div><button onClick={()=> context.setText("Trips")}>All trips</button></div>
  )
}