import { FC } from "react";
import { Layout, Avatar, Space } from "antd";
import { InstagramOutlined, MailOutlined } from "@ant-design/icons";
import "./styles.css";

export const Footer: FC = () => {

    return (
        <Layout.Footer className="footer">
            <div className="socials">

                <div>
                    CREWS & RESOURCES IN THE KEY FILM <br/>
                    PRODUCTION MARKETS OF PORTUGAL
                </div>

                <div className="center_socials">
                    <Space wrap size={16}>
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
                    </Space>
                </div>

                <div className="right_socials">
                    AERIAL CINEMATOGRAPHY & DRONE <br />
                    PILOTING SERVICES <br />
                </div>
                
            </div>
            
            <div className="credits">
                
                AerialFilm {new Date().getFullYear()} Created by{" "} 
                <a
                    href="https://github.com/assebc" 
                    target="_blank"
                    style={{color: "#DB0101"}}  
                >
                    @assebc
                </a>
                .
            </div>
        </Layout.Footer>
    );
};