import React from "react";
import "../Login/Login.css";
export default function Login() {
  return (
    <div className="form-container">
      <form action="/login" method="post">
        <div className="login-form-container">
          <div className="mb-4 ">
            <label>Username<br />
            <input type="text" className="box-border mt-2" placeholder="Enter username" />
            </label>

          </div>
          <div className="mb-4">
            <label>Password<br />
            <input type="password"  className="box-border mt-2" placeholder="Enter password" />
            </label>
            </div>
            <div>
                <input type="button" className="btn btn-primary" value="login" />
            </div>
        </div>
      </form>
    </div>
  );
}