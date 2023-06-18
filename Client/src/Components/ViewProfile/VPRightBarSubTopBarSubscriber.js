import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const VPRightBarSubTopBarSubscriber = ({ checkedSubscriber, setCheckedSubscriber }) => {
    return (
        <div className="VPRightBarSubTopBar_out d-flex">
            <div className={checkedSubscriber?"VPRightBarSubTopBar_1":"VPRightBarSubTopBar_1_1"} onClick={() => {setCheckedSubscriber(true)}}>
                My Subscribers
            </div>
            <div className={checkedSubscriber?"VPRightBarSubTopBar_2":"VPRightBarSubTopBar_2_1"} onClick={() => {setCheckedSubscriber(false)}}>
                My Subscriptions
            </div>
        </div>
    );
};
export default VPRightBarSubTopBarSubscriber;