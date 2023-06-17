import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const VPRightBarSubTopBar = () => {
    return (
        <div className="VPRightBarSubTopBar_out d-flex">
                <div className="VPRightBarSubTopBar_1">
                    Active Comments
                </div>
                <div className="VPRightBarSubTopBar_2">
                    Resolved Comments
                </div>
                <div className="VPRightBarSubTopBar_2">
                    Statistics
                </div>
        </div>
    );
};
export default VPRightBarSubTopBar;