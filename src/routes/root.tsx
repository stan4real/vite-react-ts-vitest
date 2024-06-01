import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";
import useApi from "../utils/useApi";
export default function Root() {

const users = useApi()

  return (
    <div>
      <AppBar/>
      <Outlet/>
    </div>
  )
}
