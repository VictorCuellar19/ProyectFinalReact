import { useState } from "react";
import "./Login.css";

const initial_state ={
    user:"",
    password:""
}

const Login = ({loginUser, loginError}) => {

    const [formData, setFormdata] = useState({})

    const handleSubmitForm = (event) => {
        loginUser(formData);

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

                <label htmlFor="user">User</label>
                <input type="text" name="user" id="user" onChange={handleInput} value={formData.user}/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={handleInput} value={formData.password}/>

                <input className="jugarbtn" type="submit" value="Login" onClick={handleSubmitForm}/>
                <input className="jugarbtn" type="submit" value="Cancelar" onClick={handleCancel}/>

            </form>
            {loginError ? <p>{loginError}</p> : null}
        </div>
    )}

export default Login;