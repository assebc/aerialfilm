import { Col, Row } from "antd";
import { FC } from "react";

export const About : FC = () => {

    return (
        <div className="video_wrapper_home">
            <Row gutter={[16, 16]} className="over_text">
                <Col md={12} sm={24} xs={24} className="left_over_text">
                    <h1>NOSSA HISTÓRIA</h1>
                </Col>
                <Col md={12} sm={24} xs={24} className="right_over_text">
                    <h2>AERIALFILM é um dos poucos pioneiros em Portugal
                        <br /> de espaço cinematográfico de drone.
                    </h2>
                </Col>
            </Row>

            {/* Add iframe with video */}
        </div>
    );
};