import LogoIcon from "@/assets/images/LogoiCON.svg";
import authBgUrl from "@/assets/images/auth-bg.png";
import SignIn from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";
import { useAuthContext } from "@/providers/AuthProvider";
import { Link, Navigate } from "react-router-dom";

const Auth = ({ mode = "sign-in" }) => {
  const { isLoggedIn } = useAuthContext();

  return isLoggedIn ? (
    <Navigate to="/home" />
  ) : (
    <div className="flex flex-col items-center p-8">
      <img src={LogoIcon} className="mb-8 md:mb-14" />

      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row rounded-lg overflow-hidden">
        <section className="basis-1/2 flex flex-col bg-gray-300 py-8 px-6 md:py-20 md:px-24">
          <h1 className="text-3xl font-bold text-[#212B36] mb-4 md:mb-8">
            {mode === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>

          {mode === "sign-in" ? <SignIn /> : <SignUp />}

          <div className="flex flex-wrap justify-between gap-x-8 gap-y-2 items-center pt-10">
            <h3 className="font-medium m-0 not-italic text-[#637381]">
              forget password?
            </h3>

            {mode === "sign-in" ? (
              <div className="flex gap-1 items-center whitespace-nowrap">
                <h3 className="text-gray-400">Don't have an account?</h3>

                <Link to={"/auth/sign-up"} className="text-blue-200">
                  Sign up
                </Link>
              </div>
            ) : (
              <div className="flex gap-1 items-center whitespace-nowrap">
                <h3 className="text-gray-400">Already have account?</h3>

                <Link to={"/auth/sign-in"} className="text-blue-200">
                  Sign in
                </Link>
              </div>
            )}
          </div>
        </section>

        <div className="basis-1/2 relative min-h-[180px]">
          <img
            src={authBgUrl}
            className="absolute h-full w-full object-cover object-left-bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
