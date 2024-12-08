import { FC } from "react";
import { Layout, Avatar, Row, Col } from "antd";
import { InstagramOutlined, MailOutlined } from "@ant-design/icons";
import "./styles.css";

export const Footer: FC = () => {

    return (
        <Layout.Footer className="footer">
            <Row gutter={[16, 16]} className="socials" wrap>
                <Col md={8} sm={24} xs={24}>
                    <div className="left_socials">
                        CREWS & RESOURCES IN THE KEY FILM <br/>
                        PRODUCTION MARKETS OF PORTUGAL
                    </div>
                </Col>

                <Col md={8} sm={24} xs={24} className="center_socials">
                    <a
                        href="https://www.instagram.com/aerialfilm.23/"
                        target="_blank"
                    >
                        <Avatar className="socials_avatar" size={56}>
                            <InstagramOutlined />
                        </Avatar>
                    </a>
                
                    <a
                        href="mailto: aerialfilm.23@gmail.com"
                        target="_blank"
                        >
                        <Avatar className="socials_avatar" size={56}> 
                            <MailOutlined />
                        </Avatar> 
                    </a>
                </Col>

                <Col md={8} sm={24} xs={24}>
                    <div className="right_socials">
                        AERIAL CINEMATOGRAPHY & DRONE <br />
                        PILOTING SERVICES <br />
                    </div>
                </Col>
            </Row>
            
            <div className="credits">
                AerialFilm {new Date().getFullYear()} Created by {" "} 
                <a
                    href="https://cbessa.pt" 
                    target="_blank"
                    style={{color: "#DB0101"}}  
                >
                    Bessa
                </a>
                .
            </div>
        </Layout.Footer>
    );
};