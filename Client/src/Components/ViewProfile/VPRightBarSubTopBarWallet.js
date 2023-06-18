import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Button } from "reactstrap";
const VPRightBarSubTopBarWallet = ({ checkedWallet, setCheckedWallet }) => {
    console.log("checkedWallet", checkedWallet)
    return (
        <div className="VPRightBarSubTopBar_out d-flex">
            <div className={checkedWallet ? "VPRightBarSubTopBar_1" : "VPRightBarSubTopBar_1_1"} onClick={() => { setCheckedWallet(true) }}>
                Transactions
            </div>
            <div className={checkedWallet ? "VPRightBarSubTopBar_2" : "VPRightBarSubTopBar_2_1"} onClick={() => { setCheckedWallet(false) }}>
                Account Status
            </div>
            <Button type="submit" className="request_withdrawl_button" outline>Request Withdrawal</Button>
        </div>
    );
};
export default VPRightBarSubTopBarWallet;