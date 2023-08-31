import { Col, Image, Row } from "antd";
import { FC } from "react";
import "./styles.css";

export const Gear : FC = () => {
    return (
        <div className="body">
            <Row className="division">
                <Col md={12} sm={24} xs={24} className="left_division">
                    <h1>CINEMA FPV</h1>
                </Col>

                <Col md={12} sm={24} xs={24} className="right_division">
                    <Image src="images/drone_fpv.png" width={400} height={400} />
                    <span>TITAN XL5</span>
                </Col>     
            </Row>
                
            <Row className="division"> 
                <Col md={12} sm={24} xs={24} className="left_division">
                    <Image src="images/drone_aerial.png" width={500} height={400} />
                    <span>DJI MINI 3 PRO</span>
                </Col>

                <Col md={12} sm={24} xs={24} className="right_division">
                    <h1>AERIAL CINEMA</h1>
                </Col>
            </Row>

            
        </div>
    );
};