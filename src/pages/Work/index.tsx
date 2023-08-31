import { FC } from "react";
import "./styles.css";
import { Col, Row } from "antd";

export const Work : FC = () => {
    return (
        <div className="body">
            <div className="single_header">
                <h1>VIEW OUR VARIOUS REELS OVER THE LAST SEVERAL MONTHS.</h1>
            </div>

            <Row gutter={[0, 50]} justify={"center"} align={"middle"}>
                <Row gutter={[16, 16]}>
                    <Col md={12} sm={24} xs={24} className="desc_video">
                        <iframe src="https://www.youtube.com/embed/WBs3G1PvyfM?si=j8ZiLhkGolXTyITW&autoplay=1&mute=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />

                        <h6>2022 Landscape Flow Reel</h6>
                        <span>AERIALFILM</span>
                    </Col>
                    
                    <Col md={12} sm={24} xs={24} className="desc_video">
                        <iframe src="https://www.youtube.com/embed/WBs3G1PvyfM?si=j8ZiLhkGolXTyITW&autoplay=1&mute=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />

                        <h6>2023 Trail Erdal Reel</h6>
                        <span>AERIALFILM</span>
                    </Col>
                </Row>

                <Row gutter={[16, 16]}>
                    <Col md={12} sm={24} xs={24} className="desc_video">
                        <iframe src="https://www.youtube.com/embed/WBs3G1PvyfM?si=j8ZiLhkGolXTyITW&autoplay=1&mute=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />

                        <h6>2023 MotoFestival Reel</h6>
                        <span>AERIALFILM</span>
                    </Col>

                    <Col md={12} sm={24} xs={24} className="desc_video">
                        <iframe src="https://www.youtube.com/embed/WBs3G1PvyfM?si=j8ZiLhkGolXTyITW&autoplay=1&mute=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />

                        <h6>2023 9th Drift Meet Reel</h6>
                        <span>AERIALFILM</span>
                    </Col> 
                </Row> 
            </Row>

        </div>
    );
};