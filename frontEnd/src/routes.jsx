import Login from "./Pages/Login/Login";
import Homepage from "./Pages/HomePage/Homepage";
import Register from "./Pages/Register/Register";
import Contact from "./Pages/Contact/Contact";
import City from "./Pages/City/City";
import AboutUs from './Pages/AboutUs/AboutUs'

const routes = [
  { path: "/", element: <Homepage /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/contact", element: <Contact /> },
  { path: "/city/:adres/:page", element: <City /> },

  
];

export default routes;
