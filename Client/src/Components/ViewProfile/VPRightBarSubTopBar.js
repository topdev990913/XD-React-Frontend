import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const VPRightBarSubTopBar = ({checkedSubComment, setCheckedSubComment}) => {
    console.log("checkedSubComment", checkedSubComment)
    return (
        <div className="VPRightBarSubTopBar_out d-flex">
                <div className={checkedSubComment === 1?"VPRightBarSubTopBar_1":"VPRightBarSubTopBar_1_uncomment"} onClick={() => {setCheckedSubComment(1)}}>
                    Active Comments
                </div>
                <div className={checkedSubComment === 2?"VPRightBarSubTopBar_2_uncomment":"VPRightBarSubTopBar_2"} onClick={() => {setCheckedSubComment(2)}}>
                    Resolved Comments
                </div>
                <div className={checkedSubComment === 3?"VPRightBarSubTopBar_2_uncomment":"VPRightBarSubTopBar_2"} onClick={() => {setCheckedSubComment(3)}}>
                    Statistics
                </div>
        </div>
    );
};
export default VPRightBarSubTopBar;