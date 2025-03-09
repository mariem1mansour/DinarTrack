import { useState } from "react";
import Input from "../../components/Inputs/Input";
import AuthLayout from "../../components/Layout/AuthLayout";
import App from "./../../App";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  //Handle Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please Enter A Valid Email Address !");
      return;
    }
    if (!password) {
      setError("Please Enter A Password !");
      return;
    }
    setError("");
    //Login API Call
  };
  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center ">
        <h3 className="text-xl font-semibold text-black ">Welcome Back </h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          please enter your details to login
        </p>
        <form onSubmit={handleLogin}>
          <Input
            placeholder="mariem@example.com"
            onChange={({ target }) => setEmail(target.value)}
            value={email}
            label="Email Address"
            type="email"
          />
          <Input
            placeholder="Min is 8 Characters"
            onChange={({ target }) => setPassword(target.value)}
            value={password}
            label="password"
            type="password"
          />
          {error && <p className="text-red-500 text-xs pb-2.5 ">{error}</p>}
          <button type="submit" className="btn-primary">
            LOGIN
          </button>
          <p className="text-[13px] text-slate-800 mt-3">
            Don't have an account ?{" "}
            <Link className="font-medium text-primary underline " to="/signup">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginForm;
