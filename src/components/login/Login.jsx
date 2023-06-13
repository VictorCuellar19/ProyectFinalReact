import { useState } from "react";
import "./Login.css";

const initial_state ={
    username:"",
    password:""
}

const Login = ({loginuser, loginError}) => {

    const [formData, setFormdata] = useState({})

    const handleSumitForm = () => {
        loginuser(formData);

    }

    const handleInput = (event) => {
        const {name, value} = event.target
        setFormdata({...formData, [name]:value})
    }

    const handleCancel = () => {
        setFormdata(initial_state)

    }

    return (
        <div className="divLogin">
            <form className= "formLogin" onSubmit={(event) => event.preventDefault()}>

                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" onChange={handleInput} value={formData.username}/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={handleInput} value={formData.password}/>

                <input className="jugarbtn" type="submit" value="Login" onClick={handleSumitForm}/>
                <input className="jugarbtn" type="submit" value="Cancelar" onClick={handleCancel}/>

            </form>
            {loginError ? <p>{loginError}</p> : null}
        </div>
    )}

export default Login;