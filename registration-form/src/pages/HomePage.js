import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

export const HomePage = () => {
    return (
        <div>
            Home Page
            <Link to="/login">
                <Button id="login" buttonText="Login" disabled={false}/>
            </Link>
            
            <Link to="register">
                <Button id="register" buttonText="Register" disabled={false}/>
            </Link>
            
        </div>
    );
}