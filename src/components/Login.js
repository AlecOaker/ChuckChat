import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

const Login = ({ login }) => {
    return (
        <div className="login__container">
            <Link to="/chat">
                <button onClick={login}>Continue with Google</button>
            </Link>
        </div>
    );
};

export default Login;
