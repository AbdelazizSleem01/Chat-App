import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = (props) => {

    const [username, setUsername] = useState();
    const [secret, setSecret] = useState();
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();

    const onSignup = (e) => {
        e.preventDefault();
        axios
            .post("https://chat-app-real-time-fp9b.onrender.com/signup", {
                username,
                secret,
                first_name,
                last_name,
            })
            .then((r) => props.onAuth({ ...r.data, secret }))
            .catch((e) => console.log(JSON.stringify(e.response.data)));
    };

    return (
        <div className="login-page ">
            <div className="card">
            <div className="form-title">Welcome 👋</div>
                    <div className="form-subtitle">Set a Form to get started</div>
                <form onSubmit={onSignup}>
                    <input
                        type="text"
                        name="first_name"
                        placeholder="First name"
                        onChange={(e) => setFirstName(e.target.value)}required
                    />
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Last name"
                            onChange={(e) => setLastName(e.target.value)}required
                        />
                    <input
                        type="email"
                        name="username"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}required
                    />
                    <input
                        type="password"
                        name="secret"
                        placeholder="Password"
                        onChange={(e) => setSecret(e.target.value)}required
                    />
                    <button type="submit">SIGN UP</button>
                    <Link to='/' style={{textDecoration:"none"}}>
                        <button className="Login">Login</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default SignUp
