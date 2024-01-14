import { useState } from "react";
import axios from "axios";
import './App.css'
import { Link } from "react-router-dom";

const AuthPage = (props) => {
    const [username, setUsername] = useState();
    const [secret, setSecret] = useState();

    const onLogin = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/login", { username, secret })
            .then((r) => props.onAuth({ ...r.data, secret }))
            .catch((e) => console.log(JSON.stringify(e.response.data)));
    };

    return (
        <div className="login-page ">
            <div className="card">
                {/* Login Form */}
                <form onSubmit={onLogin}>
                    <div className="form-title">Welcome 👋</div>
                    <div className="form-subtitle">Set a username to get started</div>
                    <input
                        type="email"
                        name="username"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        name="secret"
                        placeholder="Password"
                        onChange={(e) => setSecret(e.target.value)}
                    />
                    <button type="submit">LOG IN</button>
                    <Link to='/signup' style={{textDecoration:"none"}}>
                        <div className="sub-title">or Sign Up</div>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default AuthPage;