import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";

export default function SignIn() {
  return (
    <div className="flex h-full w-full min-h-screen items-center justify-center  md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-center">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center lg:pl-0 xl:max-w-[420px] ">
        <div className="bg-white shadow-md rounded-lg p-6 w-full">
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white text-center">
            Sign In
          </h4>
          <p className="mb-9 ml-1 text-base text-gray-600 text-center">
            Enter your email and password to sign in!
          </p>


       

           {/* Email */}
           <InputField
            variant="auth"
            extra="mb-3"
            label="Email*"
            placeholder="wandie@gmail.com"
            id="email"
            type="text"
          />

          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Password*"
            placeholder="********"
            id="password"
            type="password"
          />
          {/* Checkbox */}
          {/* <div className="mb-4 flex items-center justify-between px-2 ">
            <div className="flex items-center">
              <Checkbox />
              <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                Keep me logged In
              </p>
            </div>
            <a
              className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              href=" "
            >
              Forgot Password?
            </a>
          </div> */}
          <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
            Sign In
          </button>
          <div className="mt-4 text-center">
            <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
              Not registered yet?
            </span>
            <a
              href="/auth/sign-up"
              className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            >
              Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
