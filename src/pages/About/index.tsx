import { FC } from "react";
import video3 from "../../assets/videos/video3.mp4"

export const About : FC = ({}) => {

    return (

        <>
            <div className="video_wrapper_home">
                <div className="over_text">
                    <div className="left_over_text">
                        <h1>OUR STORY</h1>
                    </div>
                    <div className="right_over_text">
                        <h2>AERIALFILM is one of few pioneer in the portuguese 
                            <br />drone cinematography space.
                        </h2>
                    </div>
                </div>

                <video src={video3} loop autoPlay={true} muted />

            </div>
        </>
    );
};