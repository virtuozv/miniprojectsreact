import "./register.css";

const Register = () => {
  return (
    <div className="containerLogin">
      <div className="titleContainer">
        <h1 className="mainTitle">Lamasocial</h1>
        <span className="descTitle">
          Connect with friends and the world around you on Lamasocial
        </span>
      </div>
      <div className="formContainer">
        <input type="text" className="formInput" placeholder="Username" />
        <input type="text" className="formInput" placeholder="Email" />
        <input type="text" className="formInput" placeholder="Password" />
        <input type="text" className="formInput" placeholder="Password Again" />
        <button className="logButton">Sign Up</button>
        <a href="#" className="linkPass">
          Forgot Password?
        </a>
        <button className="createButton">Log into Account</button>
      </div>
    </div>
  );
};

export default Register;
