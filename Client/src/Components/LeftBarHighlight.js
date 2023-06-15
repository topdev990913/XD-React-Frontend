import React from "react";
import "../Css/Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import LeftBarHighlightCard from "./LeftBarHighlightCard";
const LeftBarHighlight = () => {
    return (
        <div className="LeftBarHighlight_out">
            <div className="LeftBarHighlight_header_text">
                Highlights
            </div>
            <LeftBarHighlightCard />
            <LeftBarHighlightCard />
            <LeftBarHighlightCard />
        </div>


    );
};
export default LeftBarHighlight;
