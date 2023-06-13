import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="divNavBar">
                    <ul className="ulNav">
                        <li>
                            <Link to="/">Home</Link>
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