import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../configs/routes";
import "./styles.css";

export const Header: FC = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <a href={ROUTES.HOME}>AerialFilm</a>
        </div>
        <input
          type="checkbox"
          id="menu-toggle"
          style={{ border: "1px solid red" }}
        />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <li>
            <Link to={ROUTES.WORK}>WORK</Link>
          </li>

          <li>
            <Link to={ROUTES.GEAR}>GEAR</Link>
          </li>

          <li>
            <Link to={ROUTES.ABOUT_US}>ABOUT</Link>
          </li>

          <li>
            <Link to={ROUTES.CONTACT_US}>CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
