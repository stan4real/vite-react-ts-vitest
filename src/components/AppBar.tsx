import { Link, NavLink } from "react-router-dom"
import Button from "./ui/Button/Button";

const AppBar = () => {
  const appBarItems=[
    {
      name:'Работа',
      path:'/vite-react-ts-vitest/devicelist'
    },
    {
      name:'Команды',
      path:'/vite-react-ts-vitest/teams'
    },
    {
      name:'Проекты',
      path:'/vite-react-ts-vitest/projects'
    },
    {
      name:'Календарь',
      path:'/vite-react-ts-vitest/calendar'
    },
  ]
  return (
    <div className="w-screen p-2 px-6 flex justify-between bg-white">
        <nav className="flex space-x-4 items-center">
          {appBarItems.map((item,index) => 
            <NavLink 
            key={index} 
            to={item.path}
            className="transition duration-300 ease-in-out text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium" aria-current="page"
            style={({ isActive, isTransitioning }) => {
              return {
                backgroundColor: isActive ? "rgb(17 24 39 / var(--tw-bg-opacity)" : "",
                color: isActive ? "white" : "rgb(31 41 55 / var(--tw-text-opacity)",
                viewTransitionName: isTransitioning ? "slide" : "",
                };
            }}
            >
            {item.name}
            </NavLink>
          )}
          </nav>
        <div className="flex">
            <Link to='/vite-react-ts-vitest/form' title="Login menu">
              <Button
              className="btn-outlined"
              name='Вход'>
              </Button>
            </Link>
        </div>
    </div>
  )
}

export default AppBar