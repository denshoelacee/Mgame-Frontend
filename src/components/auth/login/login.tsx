import { Input } from "@/components/ui/Input";
import { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="mx-auto relative w-full max-w-md h-auto bg-[#f8eeee] rounded-2xl shadow-lg p-8 text-black">
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 right-4 text-gray-500 hover:text-black"
      >
        <X size={22} />
      </button>

      <h1 className="text-2xl font-bold text-blue-600 text-center">
        Log in to your account
      </h1>

      <p className="text-center text-gray-700 mt-2">
        Don't have an account?{" "}
        <button
          type="button"
          className="text-[var(--secondary-color)] font-semibold"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </p>

        <form className="mt-8 space-y-3">
          {/* Phone */}
          <div>
            <label className="block text-md font-medium px-1">
              Phone Number:
            </label>
            <Input
              children={
                <>
                  <img
                    src="/assets/icons/ph.png"
                    alt="PH"
                    className="w-6 h-6"
                  />
                  <span className="px-2">+63 |</span>
                </>
              }
              id="number"
              type="tel"
              pattern="^9[0-9]{9}$"
              placeholder="9123456789"
              maxLength={10}
            />
          </div>

          <div>
            <label className="block text-md font-medium px-1">Password:</label>
            <Input id="password" type="password" />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 accent-[var(--primary-color)]"
              />
              <span className="text-sm text-gray-700">Remember me</span>
            </label>

            <button
              type="button"
              className="text-sm text-black hover:underline"
            >
              Forgot Password?
            </button>
          </div>
          <div className="w-full">
            <img
              src="/assets/images/cloud.png"
              alt="Cloudflare"
              className="w-full h-auto"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--primary-color)] text-[var(--secondary-color)] font-bold text-md py-1.5 rounded-lg"
          >
            Login
          </button>
        </form>
    </div>
  );
}

export default Login;
