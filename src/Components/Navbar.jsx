import './Navbar.css';
//import { createBrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Navbar = () => {


  // const router=createBrowserRouter([

  // ])


  return (
    <nav className="navbar">
      <div className="logo">GirNarBot</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/droneservices">Drone Services</Link></li>
        <li><Link to="/dronecenter">Drone Dekho Center</Link></li>
        <li><Link to="/fly">Fly With Us</Link></li>
        <li><Link to="/explore">Explore</Link></li>
      </ul>
      <button className="demo-btn">Demo Registration</button>
    </nav>
  );
};

export default Navbar;