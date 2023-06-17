import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HighlightLogo from '../../assets/lifebuoy.png';
import { Button } from "reactstrap";
const VPRigthBarSub3 = () => {
    return (
        <div className="VPRigthBarSub3_out">
            <div className="VPRigthBarSub2_1">
                Support
            </div>
            <div className="VPRigthBarSub3_1">
                <img src={HighlightLogo} alt="HighlightLogo" className="HighlightLogo" />
                <div className="VPRigthBarSub3_2">
                    Do you need help?
                </div>
                <Button type="button" className="Support_Button" inline>Create Support Ticket</Button>
            </div>
            <div className="VPRigthBarSub3_3">
                Support Requests
            </div>
        </div>
    );
};
export default VPRigthBarSub3;