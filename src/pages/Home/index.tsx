import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Col, Row } from "antd";
import {
  AuditOutlined,
  ContactsOutlined,
  TeamOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { handleNavigate } from "../../utils/handleNavigate";
import { ROUTES } from "../../configs/routes";
import "./styles.css";

export const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="video_wrapper_home">
        <div className="over_text_home">
          <h1>VIEW OUR WORK</h1>
          <h3>FEATURING OUR WORK IN ACTION SPORTS</h3>
          <Button className="reels_btn" onClick={() => handleNavigate(navigate, ROUTES.WORK)}>
            VIEW REELS
          </Button>
        </div>

        <iframe src="https://www.youtube.com/embed/RUXMWmKgDNk?si=A4M8Nptwqc2GR5kE&autoplay=1&mute=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
      </div>

      <div className="bio_wrapper">
        <div className="quick_bio">
          <h1>DRONE CINEMATOGRAPHY EXPERTS</h1>
          <p>
            AERIALFILM continues to build upon their strong reputations for
            delivering breathtaking drone cinematography
            <br /> on some of the sport industry's most technically challenging
            projects.
          </p>
        </div>

        <div className="navigation_section">

        <Row gutter={[16, 16]}>
          <Col  md={12} sm={24} xs={24} className="desc">
            <Avatar
              size={"large"}
              style={{
                width: "90px",
                height: "90px",
                backgroundColor: "#DB0101",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={<AuditOutlined />}
            />
            <h1>TOP DRONE CREWS</h1>
            <p>
              Headed by professional aerial
              <br /> cinematographers, our production teams deliver
              <br /> on the directors vision.
            </p>
            <Button onClick={() => handleNavigate(navigate, ROUTES.HOME)}>
              MEET OUR TEAM
            </Button>
          </Col>

          <Col  md={12} sm={24} xs={24} className="desc">
            <Avatar
              size={"large"}
              style={{
                width: "90px",
                height: "90px",
                backgroundColor: "#DB0101",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={<ContactsOutlined />}
            />
            <h1>STRATEGIC PARTNERS</h1>
            <p>
              We have long standing frindships and strategic
              <br /> partnerships with several other companies
              <br /> including other drone/aerial companies.
            </p>
            <Button
              onClick={() => handleNavigate(navigate, ROUTES.ABOUT_US)}
            >
              ABOUT US
            </Button>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col  md={12} sm={24} xs={24} className="desc">
            <Avatar
              size={"large"}
              style={{
                width: "90px",
                height: "90px",
                backgroundColor: "#DB0101",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={<VideoCameraOutlined />}
            />
            <h1>CAMERA SYSTEMS</h1>
            <p>
              We own an array of cinema/drone camera
              <br /> systems, lensing, and stabilizers that cover a
              <br /> variety of cinematography needs.
            </p>
            <Button onClick={() => handleNavigate(navigate, ROUTES.GEAR)}>
              OUR GEAR
            </Button>
          </Col>

          <Col  md={12} sm={24} xs={24} className="desc">
            <Avatar
              size={"large"}
              style={{
                width: "90px",
                height: "90px",
                backgroundColor: "#DB0101",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={<TeamOutlined />}
            />
            <h1>COLLABORATION</h1>
            <p>
              Our team of industry professionals has vast
              <br /> experience coordinating with studio cews form
              <br /> pre-through post-production.
            </p>
            <Button
              onClick={() => handleNavigate(navigate, ROUTES.CONTACT_US)}
            >
              CONTACT US
            </Button>
          </Col>
        </Row>
      </div>
      </div>
    </>
  );
};
