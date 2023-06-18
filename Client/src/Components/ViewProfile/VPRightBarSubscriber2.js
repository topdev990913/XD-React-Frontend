import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import VPSubscriptionCard from "./VPSubscriber/VPSubscriptionCard";
import VPSubscriptionCard1 from "./VPSubscriber/VPSubscriptionCard1";
const VPRightBarSubscriber2 = ({ checkedSubscriber, setCheckedSubscriber }) => {
    return (
        <div className="VPRightBarSubscriber1_out">
            <VPSubscriptionCard />
            <VPSubscriptionCard1 />
            <VPSubscriptionCard />
            <VPSubscriptionCard1 />
            <VPSubscriptionCard1 />
            <VPSubscriptionCard />
            <VPSubscriptionCard1 />
        </div>
    );
};
export default VPRightBarSubscriber2;