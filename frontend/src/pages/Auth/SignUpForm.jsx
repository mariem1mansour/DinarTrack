import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./../../components/Layout/AuthLayout";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import Input from "./../../components/Inputs/Input";

const SignUpForm = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  //handle sign up form submit
  const handleSignUp = async (e) => {};
  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center ">
        <h3 className="text-xl font-semibold text-black">Create An Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join Us Today By Entering Your Details Below{" "}
        </p>

        <form action="" onSubmit={handleSignUp}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Input
              placeholder="Mariem"
              onChange={({ target }) => setEmail(target.value)}
              value={fullName}
              label="Full Name"
              type="full Name"
            />
            <Input
              placeholder="mariem@example.com"
              onChange={({ target }) => setEmail(target.value)}
              value={email}
              label="Email Address"
              type="email"
            />

            <div className="col-span-2 ">
              <Input
                placeholder="Min is 8 Characters"
                onChange={({ target }) => setPassword(target.value)}
                value={password}
                label="password"
                type="password"
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-xs pb-2.5 ">{error}</p>}
          <button type="submit" className="btn-primary">
            SIGN UP
          </button>
          <p className="text-[13px] text-slate-800 mt-3">
            Already Have An Account ?{" "}
            <Link className="font-medium text-primary underline " to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUpForm;
