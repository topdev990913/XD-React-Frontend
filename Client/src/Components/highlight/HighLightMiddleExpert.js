import React from "react";
import "./highlight.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Button } from "reactstrap";
const HighLightMiddleExpert = () => {
    return (
        <div className="HighLightMiddle_out">
            <div className="HighLightMiddle_1">
                <Button type="submit" color="info" className="highlightMiddle_expert_button" outline>expert</Button>
            </div>
            <div className="d-flex">
                <div className="HighLightMiddle_2">
                    melih1905
                </div>
                <svg id="MDI_check-decagram" data-name="MDI / check-decagram" xmlns="http://www.w3.org/2000/svg" width="26.274" height="26.274" viewBox="0 0 26.274 26.274">
                    <g id="Boundary" transform="translate(0 0)" fill="#00d4ff" stroke="rgba(0,0,0,0)" stroke-width="1" opacity="0">
                        <rect width="26.274" height="26.274" stroke="none" />
                        <rect x="0.5" y="0.5" width="25.274" height="25.274" fill="none" />
                    </g>
                    <path id="Path_check-decagram" data-name="Path / check-decagram" d="M25.085,12.991,22.414,9.948l.372-4.029-3.952-.9L16.765,1.54l-3.722,1.6L9.32,1.54,7.251,5.021,3.3,5.908l.372,4.029L1,12.991l2.671,3.043L3.3,20.074l3.952.9L9.32,24.454l3.722-1.609,3.722,1.6,2.069-3.481,3.952-.9-.372-4.029,2.671-3.043M10.853,18.465,6.474,14.086l1.544-1.544,2.835,2.825,7.215-7.215,1.544,1.555Z" transform="translate(-0.396 0.649)" fill="#00d4ff" />
                </svg>
            </div>
            <div className="HighLightMiddle_3_expert">
                Membership Date 22.04.2022
            </div>
        </div>
    );
};
export default HighLightMiddleExpert;
