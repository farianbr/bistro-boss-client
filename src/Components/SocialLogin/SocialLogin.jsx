import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import UserDB from "../userDB/userDB";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        UserDB(user.displayName,user.email)
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div>
      <div className="divider"></div>
      {error && (
        <span className="text-xs mb-3 text-red-600 text-center">{error}</span>
      )}
      <button
        onClick={handleGoogleSignIn}
        className="btn text-2xl bg-transparent"
      >
        <FcGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;
