import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";

const Login = () => {
  const google = () => window.open("http://localhost:2000/auth/google", "_self");
  const facebook = () => window.open("http://localhost:2000/auth/facebook", "_self");
  const github = () => window.open("http://localhost:2000/auth/github", "_self");

  return (
    <div className="login container">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            github
          </div>
        </div>
        <div className="or">or</div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="Password" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
