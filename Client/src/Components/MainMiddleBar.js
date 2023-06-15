import React from "react";
import { Button } from "reactstrap";
import "../Css/Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HighLightAvatar from "./highlight/HighLightAvatar";
import HighLightMiddle_expert from "./highlight/HighLightMiddle_expert";
const MainMiddleBar = () => {
    return (
        <div className="MainMiddleBar_out">
            <div className="d-flex">
                <HighLightAvatar />
                <HighLightMiddle_expert />                
            </div>

        </div>


    );
};
export default MainMiddleBar;
