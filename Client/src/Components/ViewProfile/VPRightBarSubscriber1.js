import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import VPSubscriberCard from "./VPSubscriber/VPSubscriberCard";
import VPSubscriberCard1 from "./VPSubscriber/VPSubscriberCard1";
import VPSubscriberCard2 from "./VPSubscriber/VPSubscriberCard2";
const VPRightBarSubscriber1 = ({checkedSubscriber, setCheckedSubscriber}) => {
    return (
        <div className="VPRightBarSubscriber1_out">
            <VPSubscriberCard />
            <VPSubscriberCard1 />
            <VPSubscriberCard />
            <VPSubscriberCard2 />
            <VPSubscriberCard />
            <VPSubscriberCard1 />
            <VPSubscriberCard />
            <VPSubscriberCard2 />
        </div>
    );
};
export default VPRightBarSubscriber1;