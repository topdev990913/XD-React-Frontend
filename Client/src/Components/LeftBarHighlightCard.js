import React from "react";
import "../Css/Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HighLightAvatar from "./highlight/HighLightAvatar";
import HighLightMiddle from "./highlight/HighLightMiddle";
import HighLightEnd from "./highlight/HighLightEnd";
const LeftBarHighlightCard = () => {
    return (
        <div className="LeftBarHighlightCard_out">
            <HighLightAvatar />
            <HighLightMiddle />
            <HighLightEnd />
        </div>


    );
};
export default LeftBarHighlightCard;
