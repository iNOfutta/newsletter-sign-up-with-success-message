import { useState } from "react";
import "./App.css";

function App() {
  const [canSubmit, setCanSubmit] = useState(false);
  const [email, setEmail] = useState(null);

  return (
    <>
      <div id="main-container">
        {canSubmit ? (
          <SuccessMessage
            email={email}
            setEmail={setEmail}
            setCanSubmit={setCanSubmit}
          />
        ) : (
          <SignUpForm
            email={email}
            setEmail={setEmail}
            setCanSubmit={setCanSubmit}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

const SignUpForm = ({ email, setEmail, setCanSubmit }) => {
  const handleChange = (e) => {
    const email = e.target.value;
    email && email.includes("@") ? setEmail(email) : setEmail(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setCanSubmit(true);
      return;
    }
    setCanSubmit(false);
    return;
  };

  return (
    <>
      <img
        src="assets/images/illustration-sign-up-mobile.svg"
        alt="Sign-up"
        className="sign-up-image"
      />
      <div className="main">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="list">
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="message-container">
              <label htmlFor="email">
                <strong>Email address</strong>
              </label>
              <span className={email ? "sr-only" : ""}>Invalid email</span>
            </div>
            <input
              type="email"
              placeholder="email@company.com"
              id="email"
              onChange={handleChange}
            />
            <button className="button">Subscribe to monthly newsletter</button>
          </div>
        </form>
      </div>
    </>
  );
};

const SuccessMessage = ({ email, setEmail, setCanSubmit }) => {
  return (
    <div className="success-container">
      <div>
        <img src="/assets/images/icon-success.svg" alt="" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to
          <strong> {email || "ash@loremcompany.com"}</strong>. Please open it
          and click the button inside to confirm your subscription.
        </p>
      </div>
      <button
        className="button"
        onClick={() => {
          setCanSubmit(false);
          setEmail(null);
        }}
      >
        Dismiss message
      </button>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="attribution">
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        {" "}
        Frontend Mentor
      </a>
      . Coded by <a href="#">Albano Futa</a>.
    </div>
  );
};

export default App;
