import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const VPRightBarWalletTransaction = ({ checkedWallet, setCheckedWallet }) => {
    return (
        <div className="VPRightBarWallet_out">
            <div className="d-flex">
                <div className="VPRightBarWallet_1">
                    <div className="VPRightBarWallet_3">
                        Total Balance
                    </div>
                    <div className="d-flex justify-content-center VPRightBarWallet_4">
                        12.650<span className="VPRightBarWallet_5">₺</span>
                    </div>
                    <div className="d-flex VPRightBarWallet_6">
                        <div className="VPRightBarWallet_7">
                            <div className="VPRightBarWallet_8">
                                Available Balance
                            </div>
                            <div className="VPRightBarWallet_8">
                                Progress
                            </div>
                        </div>
                        <div className="VPRightBarWallet_9">
                            <div className="VPRightBarWallet_11">
                                8.750<span className="VPRightBarWallet_10">₺</span>
                            </div>
                            <div className="VPRightBarWallet_12">
                                8.750<span className="VPRightBarWallet_14">₺</span>
                            </div>
                            <div className="VPRightBarWallet_13">
                                Check
                            </div>
                        </div>
                    </div>
                </div>
                <div className="VPRightBarWallet_2">
                    <div className="d-flex VPRightBarWallet_15">
                        <div>May</div>
                        <div>Jun</div>
                        <div>Jul</div>
                        <div>Aug</div>
                        <div>Sep</div>
                        <div>Oct</div>
                        <div>Nov</div>
                        <div>Dec</div>
                        <div>Jan</div>
                        <div>Feb</div>
                        <div>Mar</div>
                        <div>Apr</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default VPRightBarWalletTransaction;