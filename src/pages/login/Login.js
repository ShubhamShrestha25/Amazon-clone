import "./Login.css";
import AmazonLogo from "../../Amazon_Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginInitiate } from "../../redux/action/actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useSelector((state) => state.data);
  let dispatch = useDispatch();
  let history = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    dispatch(loginInitiate(email, password));
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (user) {
      history("/");
    }
  }, [user, history]);

  return (
    <div className="login">
      <Link to="/">
        <img src={AmazonLogo} alt="" className="login-logo" />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
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
          <button type="submit" onClick={signIn} className="login-signIn">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Condition of Use and Privacy
          Notice
        </p>
      </div>
      <p>New to Amazon ?</p>
      <Link to="/register">
        <button className="login-register">Create Your Amazon Account</button>
      </Link>
    </div>
  );
};

export default Login;
