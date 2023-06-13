import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    return (
        <div className="divLogin">
            <form className= "formLogin" onSubmit={(event) => event.preventDefault()}>

                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />

                <input className="jugarbtn" type="submit" value="Login" />

            </form>
        </div>
    )}

export default Login;