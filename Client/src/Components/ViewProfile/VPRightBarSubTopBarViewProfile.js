import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const VPRightBarSubTopBarViewProfile = ({checkedVPSubTopBar, setCheckedVPSubTopBar}) => {
    return (
        <div className="VPRightBarSubTopBar_out d-flex">
                <div className={checkedVPSubTopBar === 1?"VPRightBarSubTopBar_1":"VPRightBarSubTopBar_1_uncomment"} onClick={() => {setCheckedVPSubTopBar(1)}}>
                    Active Comments
                </div>
                <div className={checkedVPSubTopBar === 2?"VPRightBarSubTopBar_2_uncomment":"VPRightBarSubTopBar_2"} onClick={() => {setCheckedVPSubTopBar(2)}}>
                    Resolved Comments
                </div>
                <div className={checkedVPSubTopBar === 3?"VPRightBarSubTopBar_2_uncomment":"VPRightBarSubTopBar_2"} onClick={() => {setCheckedVPSubTopBar(3)}}>
                    Statistics
                </div>
        </div>
    );
};
export default VPRightBarSubTopBarViewProfile;