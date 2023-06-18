import React from "react";
import "./VPSubscriber.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SubscriberLogo from '../../../assets/Subscriber_avatar.png';

const VPSubscriberCard1 = ({checkedSubscriber, setCheckedSubscriber}) => {
    return (
        <div className="VPSubscriberCard_out">
            <img src={SubscriberLogo} alt="SubscriberLogo" className="SubscriberLogo" />
            <div className="VPSubscriberCard_1">
                melih1905
            </div>
            <div className="VPSubscriberCard_1" style={{marginLeft: "37.8px"}}>
                3 Month
            </div>
            <div className="VPSubscriberCard_1" style={{marginLeft: "38.8px"}}>
                22.04.2023
            </div>
            <div className="VPSubscriberCard_1" style={{marginLeft: "44.9px"}}>
                22.05.2023
            </div>
            <div className="VPSubscriberCard_2_1" style={{marginLeft: "55.1px"}}>
                Waiting
            </div>
        </div>
    );
};
export default VPSubscriberCard1;
