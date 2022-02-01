import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AmazonLogo from "../../Amazon_Logo.png";
import { registerInitiate } from "../../redux/action/actions";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    dispatch(registerInitiate(email, password));
  };

  return (
    <div className="register">
      <Link to="/">
        <img src={AmazonLogo} alt="" className="register-logo" />
      </Link>
      <div className="register-container">
        <h1>Create Account</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={register} className="continue">
            Continue
          </button>
          <div className="detail">
            <p>Already have an account ?</p>
            <Link to="/login" className="signin-link">
              <p>Sign In</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
