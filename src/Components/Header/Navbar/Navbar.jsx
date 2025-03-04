import { Link } from "react-router-dom";


const Navbar = () => {
   
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl font-bold" to="/">ALL In One</Link>
        </div>
        <div className="flex-none">
            <button className="btn btn-accent"><Link to="/login">Login</Link></button>
        </div>
      </div>
    );
};

export default Navbar;