import { Link, NavLink } from "react-router-dom"

const AppBar = () => {
  const appBarItems=[
    {
      name:'Dashboard',
      path:'/vite-react-ts-vitest/devicelist'
    },
    {
      name:'Team',
      path:'/vite-react-ts-vitest/teams'
    },
    {
      name:'Projects',
      path:'/vite-react-ts-vitest/projects'
    },
    {
      name:'Calendar',
      path:'/vite-react-ts-vitest/calendar'
    },
  ]
  return (
    <div className="w-screen p-2 flex justify-between bg-white">
        <nav className="flex space-x-4 ">
          {appBarItems.map((item,index) => 
            <NavLink 
            key={index} 
            to={item.path}
            className="transition duration-300 ease-in-out text-gray-800 hover:bg-gray-400 rounded-md px-3 py-2 text-sm font-medium" aria-current="page"
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
        <div className="flex space-x-10">
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="absolute -inset-1.5"></span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
            </button>
        </div>
        <div className="relative ml-3">
            <Link to='/vite-react-ts-vitest/form' title="Login menu">
            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default AppBar