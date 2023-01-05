import React, { useState } from "react";
import { signin, isAuthenticated } from "../helper";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "squareboat@gmail.com",
    password: "squareboat",
    didRedirect: false,
  });

  const { email, password, didRedirect } = values;

  const patterns = {
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\d\w@-]{8,20}$/i,
  };

  function validate(field, regeemailHelpx) {
    if (regeemailHelpx.test(field.value)) {
      field.className = "form-control valid";
    } else {
      field.className = "form-control invalid";
    }
  }

  const handleChange = (name) => (event) => {
    validate(event.target, patterns[name]);
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values });
    signin({ email, password })
      .then((data) => {
        localStorage.setItem("loggedInUser", JSON.stringify(data.data));
        setValues({
          ...values,
          didRedirect: true,
        });
      })
      .catch(console.log("sigin request failed"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      return <Redirect to="/all" />;
    }
    if (isAuthenticated()) {
      return <Redirect to="/login" />;
    }
  };

  return (
    <>
      <div className="loginContainer">
        <div className="text-left">
          <form>
            <div className="form-group">
              <label className="text-dark">Email</label>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={handleChange("email")}
                required
              />
              <small id="emailHelp" class="form-text">
                Enter valid email address.
              </small>
            </div>
            <div className="form-group">
              <label className="text-dark">Password</label>
              <input
                className="form-control"
                type="password"
                value={password}
                required
                onChange={handleChange("password")}
              />
            </div>
            <button onClick={onSubmit} className="btn btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
      {performRedirect()}
    </>
  );
};

export default Login;
