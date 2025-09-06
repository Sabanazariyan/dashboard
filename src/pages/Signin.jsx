import { Link } from "react-router-dom";
import styles from "./Signin.module.css";

import { IoIosArrowBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

import { IoMoon } from "react-icons/io5";

function Signin() {
  return (
    <div className={styles.container}>
      <div className={styles.signin}>
        <Link to="/">
          <div>
            <IoIosArrowBack />
            <p>Back to dashboard</p>
          </div>
        </Link>
        <form>
          <h3>Sign In</h3>
          <p>Enter your email and password to sign in!</p>
          <Link>
            <div className={styles.google}>
              <FcGoogle />
              <p>Sign in with Google</p>
            </div>
          </Link>
          <div className={styles.or}></div>
          <div className={styles.inputs}>
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" placeholder="mail@simmmple.com" />
            <label htmlFor="Password">Password*</label>
            <input
              type="password"
              id="Password"
              placeholder="Min. 8 characters"
            />
          </div>
          <div className={styles.link}>
            <div className={styles.login}>
              <input type="checkbox" id="login" />
              <label htmlFor="login">Keep me logged in</label>
            </div>
            <Link>Forget password?</Link>
          </div>
          <button type="submit">Sign In</button>
          <div className={styles.createaccount}>
            <Link>
              Not registered yet? <span>Create an Account</span>
            </Link>
          </div>
        </form>
      </div>
      <div className={styles.photo}>
        <div className={styles.content}>
          <div className={styles.icon}>
            <IoMoon />
          </div>
          <div className={styles.text}>
            <h2>HORIZON</h2>
            <p>UI</p>
          </div>
          <div className={styles.links}>
            <Link>Learn more about Horizon UI on</Link>
            <Link>horizon-ui.com</Link>
          </div>
          <div className={styles.footer}>
            <ul>
              <li>
                <Link>Marketplace</Link>
              </li>
              <li>
                <Link>License</Link>
              </li>
              <li>
                <Link>Terms of Use</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
