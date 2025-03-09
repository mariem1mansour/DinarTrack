import { useState } from "react";
import Input from "../../components/Inputs/Input";
import AuthLayout from "../../components/Layout/AuthLayout";
import App from "./../../App";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
const SignUpForm = () => {
  const [profilePick, setProfilePick] = useState(null);
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
          <ProfilePhotoSelector />
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
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUpForm;
