import { Link } from "react-router-dom";
//using the same js class and adding module.css to it, this for linking this style class only to this component
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Whasmen ©</div>
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/NearMe">Near Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
