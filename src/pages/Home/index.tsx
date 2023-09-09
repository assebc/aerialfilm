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
          <h1>VEJA O NOSSO TRABALHO</h1>
          <h3>APRESENTANDO O NOSSO TRABALHO EM DESPORTOS DE AÇÃO</h3>
          <Button className="reels_btn" onClick={() => handleNavigate(navigate, ROUTES.WORK)}>
            VER REELS
          </Button>
        </div>

        <iframe src="https://www.youtube.com/embed/WBs3G1PvyfM?si=j8ZiLhkGolXTyITW&autoplay=1&mute=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
      </div>

      <div className="bio_wrapper">
        <div className="quick_bio">
          <h1>EXPERTS EM CINEMATOGRAFIA DE DRONE</h1>
          <p>
            AERIALFILM continua a construir a sua forte reputação
            apresentando filmagens de cortar a respiração
            <br /> em alguns dos desportos radicais na indústria com os mais desafiantes projetos.
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
              Conduzido por cinematógrafos
              <br /> aéreos profissionais, as nossas equipas de 
              <br /> produção entregam o pretendido.
            </p>
            <Button onClick={() => handleNavigate(navigate, ROUTES.HOME)}>
              CONHEÇA A NOSSA EQUIPA
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
            <h1>PARCEIROS ESTRATÉGICOS</h1>
            <p>
              Temos longas amizades e parceiros 
              <br /> estratégicos com muitas outras empresas
              <br /> incluíndo outras empresas de drone.
            </p>
            <Button
              onClick={() => handleNavigate(navigate, ROUTES.ABOUT_US)}
            >
              ACERCA DE NÓS
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
            <h1>EQUIPAMENTOS DE FILMAGEM</h1>
            <p>
              Possuímos um conjunto de drones/cinema cameras,
              <br /> lentes, e estabilizadores que cobrem uma
              <br /> variedade de necessidades cinematográficas.
            </p>
            <Button onClick={() => handleNavigate(navigate, ROUTES.GEAR)}>
              NOSSO EQUIPAMENTO
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
            <h1>COLABORAÇÃO</h1>
            <p>
              A nossa equipa de professionais tem uma vasta
              <br /> experiência a coordenar com a equipa de estúdio
              <br /> que efetua a pre-processamento e a pós-produção.
            </p>
            <Button
              onClick={() => handleNavigate(navigate, ROUTES.CONTACT_US)}
            >
              CONTACTE-NOS
            </Button>
          </Col>
        </Row>
      </div>
      </div>
    </>
  );
};
