import { Navigate } from "react-router-dom"

const AuthRoute = ({ user, component }) => {

    
    if (user) return component;

    if (!user) return <Navigate to="/Login" />

}
export default AuthRoute