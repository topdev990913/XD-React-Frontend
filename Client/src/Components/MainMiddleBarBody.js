import React from "react";
import "../Css/Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MatchDetailsBox from "./MatchDetailsBox";
import AnalysisBox from "./AnalysisBox";
const MainMiddleBarBody = () => {
    return (
        <div className="d-flex">
            <div className="MatchDetails_out">
                <div className="MatchDetails_header_text">
                    Match Details
                </div>
                <MatchDetailsBox />
            </div>
            <div className="Analysis_out">
                <div className="MatchDetails_header_text">
                    Analysis
                </div>
                <AnalysisBox />
            </div>
        </div>
    );
};
export default MainMiddleBarBody;
