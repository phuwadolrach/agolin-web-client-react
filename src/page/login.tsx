import React from "react";

const Login = () => {
    return (
        <div>
            <form>
                <h1 className="h3 mb-3 fw-normal">Login</h1>
                <input type="email" className="form-control" placeholder="name@example.com" required />
                <input type="password" className="form-control" placeholder="Password" required />
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </div>
    );

};
export default Login;