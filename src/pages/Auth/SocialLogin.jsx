import { Github } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import { saveUser } from "../../api/auth";

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { socialSign } = useAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleSign = async (media) => {
    try {
      if (media) {
        const { user } = await socialSign(media);
        const userInfo = {
          name: user?.displayName,
          email: user?.email,
          image: user?.photoURL,
        };
        await saveUser(userInfo);
        toast.success("Sign In Successful.");
        navigate("/");
      } else {
        throw new Error("Invalid social media provider.");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  return (
    <div className="mt-3 space-y-3">
      <button
        onClick={() => handleSign(googleProvider)}
        className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
      >
        <span className="mr-2 inline-block">
          <svg
            className="h-6 w-6 text-rose-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
          </svg>
        </span>
        {location.pathname === "/register"
          ? "Sign up with Google"
          : "Sign in with Google"}
      </button>
      <button
        onClick={() => handleSign(githubProvider)}
        className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
      >
        <span className="mr-2 inline-block">
          <Github />
        </span>
        {location.pathname === "/register"
          ? "Sign up with Github"
          : "Sign in with Github"}
      </button>
    </div>
  );
};

export default SocialLogin;
