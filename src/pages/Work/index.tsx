import { FC } from "react";
import "./styles.css";
import video1 from "../../assets/videos/video4.mp4";
import video2 from "../../assets/videos/video2_2.mp4";
import video3 from "../../assets/videos/video2_3.mp4";
import video4 from "../../assets/videos/video2_4.mp4";
import { Space } from "antd";

export const Work : FC = ({}) => {
    return (
        <div className="body">
            <div className="single_header">
                <h1>VIEW OUR VARIOUS REELS OVER THE LAST SEVERAL MONTHS.</h1>
            </div>

            <div className="navigate_avatars">
                <div className="avatars">

                    <Space direction="horizontal" size={240}>
                        <Space direction="vertical" size={100}>
                            <div className="desc_video">
                                <video width={400} src={video1} autoPlay={false} controls controlsList="nodownload"/>
                                <h6>2022 Landscape Flow Reel</h6>
                                <span>AERIALFILM</span>
                            </div>
                            
                            <div className="desc_video">
                                <video width={400} src={video4} autoPlay={false} controls controlsList="nodownload"/>
                                <h6>2023 Trail Erdal Reel</h6>
                                <span>AERIALFILM</span>
                            </div>
                        </Space>

                        <Space direction="vertical" size={100}>
                            
                            
                            <div className="desc_video">
                                <video width={400} src={video2} autoPlay={false} controls controlsList="nodownload"/>
                                <h6>2023 MotoFestival Reel</h6>
                                <span>AERIALFILM</span>
                            </div>

                            <div className="desc_video">
                                <video width={400} src={video3} autoPlay={false} controls controlsList="nodownload"/>
                                <h6>2023 9th Drift Meet Reel</h6>
                                <span>AERIALFILM</span>
                            </div> 
                        </Space>
                        
                    </Space>

                </div>
            </div>

        </div>
    );
};