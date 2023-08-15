import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Layout } from "antd";
import { ROUTES } from "../../configs/routes";
import "./styles.css";

export const Header: FC = () => {
  const [showNavOptions, setShowNavOptions] = useState(false);

  return (
    <Layout.Header className="header">
      <div className="navbar">
        <Link to={ROUTES.HOME}>
          <img src="favicon.png" alt="logo" />
        </Link>

        <ul
          className={
            showNavOptions ? "nav_options show_nav_options" : "nav_options"
          }
        >
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

        <Button
          className="hamburguer"
          onClick={() => setShowNavOptions((prev) => !prev)}
        >
          X
        </Button>
      </div>
    </Layout.Header>
  );
};
