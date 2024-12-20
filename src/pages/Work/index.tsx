import { FC } from "react";
import "./styles.css";
import { Col, Row } from "antd";

export const Work : FC = () => {
    return (
        <div className="body">
            <div className="single_header">
                <h1>VIEW OUR VARIOUS REELS OVER THE LAST SEVERAL MONTHS.</h1>
            </div>

            <Row gutter={[0, 50]}>
                <Row gutter={[16, 16]} style={{width:"100%"}}>
                    <Col md={12} sm={24} xs={24} className="desc_video">
                        <div>
                            <iframe src="https://www.youtube.com/embed/RUXMWmKgDNk?si=A4M8Nptwqc2GR5kE&autoplay=1&mute=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />

                            <h6>2023 9th Drift Meet Reel</h6>
                            <span>AERIALFILM</span>
                        </div>
                    </Col>

                    <Col md={12} sm={24} xs={24} className="desc_video">
                        <div>
                            <iframe src="https://www.youtube.com/embed/bV93GYuX7wg?si=xxBieHUV6KlLYxdF&autoplay=1&mute=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />

                            <h6>2023 Trail Erdal Reel</h6>
                            <span>AERIALFILM</span>
                        </div>
                    </Col>
                </Row>

                <Row gutter={[16, 16]} justify={"center"} align={"middle"} style={{width:"100%"}}>
                    <Col md={12} sm={24} xs={24} className="desc_video">
                        <div>
                            <iframe src="https://www.youtube.com/embed/Qxj6xobxumc?si=uCG309uer18YnECG&autoplay=1&mute=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />

                            <h6>2023 MotorFestival Reel</h6>
                            <span>AERIALFILM</span>
                        </div>
                    </Col>
                </Row> 
            </Row>

        </div>
    );
};