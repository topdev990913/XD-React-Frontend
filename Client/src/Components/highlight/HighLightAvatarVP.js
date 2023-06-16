import React from "react";
import "./highlight.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import hightlight_avatar1 from './assets/portrait-of-happy-and-cheerful-handsome-adult-man-2022-02-07-02-02-56-utc1.png'
import highlight_logo1 from './assets/MDI - crown-circle-outline1.png'
const HighLightAvatarVP = () => {
    return (
        <div className="HighLightAvatar_out">
            <img src={hightlight_avatar1} alt="highlight_avatar" className="hightlight_avatar" />
            <img src={highlight_logo1} alt="highlight_logo" className="highlight_logo_VP" />
        </div>
    );
};
export default HighLightAvatarVP;
