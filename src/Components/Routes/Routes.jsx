import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./Main/Main";
import Home from "../Home/Home";
import Cafeteria from "../Cafeteria/Cafeteria";
import Bustracker from "../Bus Tracker/Bustracker";
import FacultyInfo from "../FacultyInfo/FacultyInfo";
import EventClub from "../EventClub/EventClub";
import CampusNav from "../CampusNav/CampusNav";
import Login from "../Header/Navbar/Login/Login";
import Signup from "../Header/Navbar/Signup/Signup";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/cafeteria/:category",
                element:<Cafeteria></Cafeteria>
            },
            {
                path:"/bustracker",
                element:<Bustracker></Bustracker>
            },
            {
                path: '/facultyinfo',
                element: <FacultyInfo></FacultyInfo>
            },
            {
                path: '/eventclub',
                element: <EventClub></EventClub>
            },
            {
                path: '/campusnav',
                element: <CampusNav></CampusNav>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
]);