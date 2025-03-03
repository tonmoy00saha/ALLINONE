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
            }
        ]
    },
]);