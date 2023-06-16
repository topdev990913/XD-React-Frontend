import React from "react";
import "../Css/Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HighLightAvatar from "./highlight/HighLightAvatar";
import HighLightMiddleExpert from "./highlight/HighLightMiddleExpert";
import MainMiddleBarMiddle from "./MainMiddleBarMiddle";
import MainMiddleBarButtonGroup from "./MainMiddleBarButtonGroup";
import MainMiddleBarBody from "./MainMiddleBarBody";
import MainMiddleBarFooter from "./MainMiddleBarFooter";
const MainMiddleBar = () => {
    return (
        <div className="MainMiddleBar_out">
            <div className="d-flex">
                <HighLightAvatar />
                <HighLightMiddleExpert />
                <MainMiddleBarMiddle />
                <MainMiddleBarButtonGroup />
            </div>
            <MainMiddleBarBody />
            <MainMiddleBarFooter />
        </div>


    );
};
export default MainMiddleBar;
