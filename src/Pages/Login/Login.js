import { Form, Input, Button, Checkbox, Typography, notification } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { userLogin } from "./../../redux/actions/authActions";
import { useState, useEffect } from "react";
import loginBack from "../../Assets/loginback.jpg";
import iconDemo from "../../Assets/icon_demo.svg";
import swal from "sweetalert";
import admin from "../../Assets/admin.png";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(true);
  const dispatch = useDispatch();
  const handleLogin = async (values) => {
    console.log("Success:", values);
    values.preventDefault();
    swal("", "Login Successfully", "success").then(() => {
      dispatch({
        type: "IS_ADMIN",
        payload: isAdmin,
      });
      history.push("/");
    });
  };
  const handleChangeRole = () => {
    setIsAdmin((isAdmin) => !isAdmin);
  };

  useEffect(() => {
    notification.info({
      message: "Use Email : admin@gmail.com & Password 123456 for admin login",
      duration: 0,
    });
    notification.info({
      message:
        "Use Email : librarian@gmail.com & Password 123456 for librarian login",
      duration: 0,
    });
  }, []);

  const loginContainer = {
    backgroundImage: `url(${loginBack})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "fixed",
    overflow: "auto",
    top: 0,
    bottom: 0,
  };

  const Login = () => {
    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("role", "admin");
      history.replace("/");
    } else if (email === "librarian@gmail.com" && password === "123456") {
      localStorage.setItem("role", "librarian");
      history.replace("/");
    } else {
      swal("", "Incorrect email or password", "error");
    }
  };

  return (
    <div className="main-login" style={loginContainer}>
      <div className="form-container">
        <div className="login-icon">
          <img src={admin} alt="icon" height="160px" />
        </div>
        <div className="login-title">
          {/* {isAdmin ? "Admin" : "Librarian"} Login */}
          Login
        </div>
        <form className="pa-24" onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <Input
              type="email"
              className="black"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              // onBlur={handleBlur}
              placeholder="Email"
            />
            {/* <Error field="email" /> */}
          </div>

          <div className="mtb-16">
            <label>Password</label>
            <Input
              type="password"
              className="black"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // onBlur={handleBlur}
              placeholder="Password"
            />
            {/* <Error field="password" /> */}
          </div>

          <div className="div-center mtb-16">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>

          <Button
            htmlType="submit"
            type="primary"
            className="form-button div-center"
            // onClick={Login}
          >
            Login
          </Button>
          <div
            className="div-center link-label mtb-16"
            // onClick={() => props.history.push("/forgotPassword")}
          >
            Forgot Password ?
          </div>
          {/* <div
            className="div-center link-label mtb-16"
            onClick={handleChangeRole}
          >
            Login As {isAdmin ? "Librarian" : "Admin"}
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
