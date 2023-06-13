import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="divNavBar">
                    <ul className="ulNav">
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/Results">Results</Link>
                        </li>
                        <li>
                            <Link to="/About">About Us</Link>
                        </li>
                    </ul>
                </div>
            );
    }


export default NavBar;