import React from "react";
import "./VPSubscriber.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SubscriberLogo from '../../../assets/Subscriber_avatar.png';
import { Button } from "reactstrap";

const VPSubscriptionCard1 = ({ checkedSubscriber, setCheckedSubscriber }) => {
    return (
        <div className="VPSubscriberCard_out">
            <img src={SubscriberLogo} alt="SubscriberLogo" className="SubscriberLogo" />
            <div className="VPSubscriberCard_1">
                melih1905
            </div>
            <svg id="MDI_check-decagram" data-name="MDI / check-decagram" xmlns="http://www.w3.org/2000/svg" width="23.264" height="23.264" viewBox="0 0 23.264 23.264">
                <g id="Boundary" transform="translate(0 0)" fill="#00d4ff" stroke="rgba(0,0,0,0)" stroke-width="1" opacity="0">
                    <rect width="23.264" height="23.264" stroke="none" />
                    <rect x="0.5" y="0.5" width="22.264" height="22.264" fill="none" />
                </g>
                <path id="Path_check-decagram" data-name="Path / check-decagram" d="M22.325,11.679,19.96,8.985l.33-3.567-3.5-.795L14.958,1.54l-3.3,1.415L8.367,1.54,6.535,4.622l-3.5.785.33,3.567L1,11.679l2.365,2.695-.33,3.577,3.5.795,1.832,3.082,3.3-1.425,3.3,1.415,1.832-3.082,3.5-.795-.33-3.567,2.365-2.695m-12.6,4.847L5.847,12.649l1.367-1.367,2.511,2.5,6.388-6.388,1.367,1.376Z" transform="translate(-0.465 0.399)" fill="#00d4ff" />
            </svg>
            <Button type="submit" className="Subscription_expert_button" style={{ marginLeft: "31px" }}>expert</Button>
            <div className="VPSubscriberCard_1" style={{ marginLeft: "38.8px" }}>
                22.04.2023
            </div>
            <div className="VPSubscriberCard_1_1" style={{ marginLeft: "44.9px" }}>
                Ended
            </div>
            <div className="VPSubscriberCard_2_3" style={{ marginLeft: "100.1px" }}>
                Renew
            </div>
        </div>
    );
};
export default VPSubscriptionCard1;
