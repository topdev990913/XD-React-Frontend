import React from "react";
import "./highlight.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import hightlight_avatar from './assets/portrait-of-happy-and-cheerful-handsome-adult-man-2022-02-07-02-02-56-utc.png'
import highlight_logo from './assets/MDI - crown-circle-outline.png'
const HighLightAvatar = () => {
    return (
        <div className="HighLightAvatar_out">
            <img src={hightlight_avatar} alt="highlight_avatar" className="hightlight_avatar" />
            <img src={highlight_logo} alt="highlight_logo" className="highlight_logo" />
        </div>
    );
};
export default HighLightAvatar;
