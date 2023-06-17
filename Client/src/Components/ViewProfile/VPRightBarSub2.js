import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import VPRightBarHighlight from "./VPRightBarHighlight";
import VPRightBarHighlight1 from "./VPRightBarHighlight1";
import VPRightBarHighlight2 from "./VPRightBarHighlight2";
const VPRigthBarSub2 = () => {
    return (
        <div className="VPRigthBarSub2_out">
            <div className="VPRigthBarSub2_1">
                <span className="VPRigthBarSub2_2">21</span> New Notification
            </div>
            <VPRightBarHighlight />
            <VPRightBarHighlight1 />
            <VPRightBarHighlight2 />
        </div>
    );
};
export default VPRigthBarSub2;