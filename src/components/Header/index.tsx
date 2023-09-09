import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../configs/routes";
import "./styles.css";

export const Header: FC = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <a href={ROUTES.HOME}><img src={"/favicon.png"} style={{width: "28%"}}/></a>
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
            <Link to={ROUTES.WORK}>TRABALHOS</Link>
          </li>

          <li>
            <Link to={ROUTES.GEAR}>EQUIPAMENTOS</Link>
          </li>

          <li>
            <Link to={ROUTES.ABOUT_US}>ACERCA</Link>
          </li>

          <li>
            <Link to={ROUTES.CONTACT_US}>CONTACTOS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
