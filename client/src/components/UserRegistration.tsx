import {useContext} from "react"
import  {PageContext}  from "../App";


type Props = {}

export default function UserRegistration({}: Props) {
    const context = useContext(PageContext)
    if (context)
  return (
    <div><button onClick={()=> context.setText("home")}>Homepage</button></div>
  )
}