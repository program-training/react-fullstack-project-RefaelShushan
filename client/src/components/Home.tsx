import {useContext} from "react"
import  {PageContext}  from "../App";




type Props = {};

export default function Home({}: Props) {
    const context = useContext(PageContext)
    if (context)
  return (
    <div>
      <p>
        <h1>Welcome to trips</h1>
      </p>
      <button onClick={()=> context.setText("Trips")}>More than trips</button>
      <button  onClick={()=> context.setText("UserRegistration")}>Registration</button>
      <button  onClick={()=> context.setText("UserLogin")}>Log in</button>
    </div>
  );
}
