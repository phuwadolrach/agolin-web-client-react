import React from "react";

const Register = () => {
    return (
        <div>
            <form>
                <h1 className="h3 mb-3 fw-normal">Register</h1>
                <input type="name" className="form-control" placeholder="name" required />
                <input type="mail" className="form-control" placeholder="mail" required />
                <input type="password" className="form-control" placeholder="Password" required />
                <input type="tel" className="form-control" placeholder="tel" required />
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </div>
    );

};
export default Register;