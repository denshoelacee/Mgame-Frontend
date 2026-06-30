import { Input } from "@/components/ui/Input";
import { FaTimes } from "react-icons/fa";

interface RegisterProps {
  isOpen: boolean
  onClose: () => void;
  onLogin: () => void;
}
function Register({ isOpen, onClose, onLogin }: RegisterProps) {

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-xs p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-[#f8eeee] rounded-2xl shadow-lg p-8 text-black"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <FaTimes size={22} />
        </button>

        <h1 className="text-3xl font-bold text-[var(--primary-color)] text-center">
          Create Account
        </h1>

        <p className="text-center text-gray-700 mt-2">
          Already have an account?{" "}
          <button className="text-[var(--secondary-color)] font-semibold"
            onClick={onLogin}>
            Login
          </button>
        </p>

        <form className="mt-8 space-y-2">
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

          {/* Password */}
          <div>
            <label className="block text-md font-medium px-1">
              Create Password:
            </label>
            <Input
              id="password"
              type="password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-md font-medium px-1 ">
              Confirm Password:
            </label>

            <Input
              id="confirm_password"
              type="password"
            />
          </div>
          {/* <div className="relative mx-auto w-full max-w-[600px] aspect-[4] px-2">
            <Image
              src="/assets/images/cloud.png"
              alt="Cloud"
              fill
              className="object-contain"
            />
          </div> */}
          <div className="w-full">
            <img
              src="/assets/images/cloud.png"
              alt="Cloudflare"
              className="w-full h-full"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--secondary-color)] text-[var(--primary-color)] font-bold text-md my-2 py-1.5 rounded-lg"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
