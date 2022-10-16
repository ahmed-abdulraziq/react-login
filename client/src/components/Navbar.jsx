import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const logout = () => window.open("http://localhost:5000/auth/logout", "_self");
  return (
     <nav>
      <div className="container">
        <Link to="/">React_login</Link>
        { user?
          (<ul>
            <li><img src={user.photo} alt="" /></li>
            <li>{user.name}</li>
            <li className="logout" onClick={logout}>Logout</li>
          </ul>) : 
          (<Link to="/login">Login</Link>)
        }
      </div>
     </nav>
  );
};

export default Navbar;
