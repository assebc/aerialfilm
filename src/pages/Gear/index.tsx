import { Image } from "antd";
import { FC } from "react";
import "./styles.css";

export const Gear : FC = ({}) => {
    return (
        <div className="body">
            <div className="division">
                <div className="left_division">
                    <h1>CINEMA FPV</h1>
                </div>

                <div className="right_division">
                    <Image src="images/drone_fpv.png" width={400} height={400} />
                    <span>TITAN XL5</span>
                </div>

                        
            </div>
                
            <div className="division"> 
                <div className="left_division">
                    <Image src="images/drone_aerial.png" width={600} height={400} />
                    <span>DJI MINI 3 PRO</span>
                </div>

                <div className="right_division">
                    <h1>AERIAL CINEMA</h1>
                </div>

                
            </div>

            
        </div>
    );
};