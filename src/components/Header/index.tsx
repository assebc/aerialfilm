import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout, Button } from "antd";
import { ROUTES } from "../../configs/routes";
import { handleNavigate } from "../../utils/handleNavigate";
import "./styles.css";

export const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <Layout.Header className="header">
      <div className="navbar">
        <Link to={ROUTES.HOME}>
          <img src="favicon.png" alt="logo" />
        </Link>
        <div className="button_dropdown">
          <Button
            type="link"
            onClick={() => handleNavigate(navigate, ROUTES.WORK)}
          >
            WORK
          </Button>
          <Button
            type="link"
            onClick={() => handleNavigate(navigate, ROUTES.GEAR)}
          >
            GEAR
          </Button>
          <Button
            type="link"
            onClick={() => handleNavigate(navigate, ROUTES.ABOUT_US)}
          >
            ABOUT
          </Button>
          <Button
            type="link"
            onClick={() => handleNavigate(navigate, ROUTES.CONTACT_US)}
          >
            CONTACT
          </Button>
        </div>
      </div>
    </Layout.Header>
  );
};
