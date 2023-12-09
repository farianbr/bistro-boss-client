import { useContext } from "react";
import bgImg from "../../assets/others/authentication.png";
import bgImg2 from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const {createUser} = useContext(AuthContext)
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email,data.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      navigate("/")
    })
  };

  return (
    <section className={`max-w-screen-2xl mx-auto`}>
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="hero min-h-screen bg-base-200"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={bgImg2} alt="" srcSet="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm">
            <span className="text-3xl font-bold text-center">Sign Up</span>

            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div className="text-center">
              <span className="label-text-alt ">Already Registered? </span>
              <a
                href="/login"
                className="label-text-alt link link-hover font-bold"
              >
                Go to log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
