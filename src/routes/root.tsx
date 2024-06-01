import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";
export default function Root() {

  return (
    <div>
      <AppBar/>
      <Outlet/>
    </div>
  )
}
