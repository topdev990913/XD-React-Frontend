import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Button } from "reactstrap";
import CrownLogo from '../../assets/Path - crown-circle-outline.png'
import Logo1 from '../../assets/Path 205.png';
import Logo2 from '../../assets/Path 206.png';
import CheckLogo from '../../assets/Path - check-decagram.png';
// import { MDBRange } from "mdb-react-ui-kit";
const VPRightBarWalletAccount = ({ checkedWallet, setCheckedWallet }) => {
    return (
        <div className="VPRightBarWallet_out">
            <div className="d-flex">
                <div className="VPRightBarWalletAccount_1">
                    <Button type="submit" className="Journeyman_button" outline>Journeyman</Button>
                    <img src={CrownLogo} alt="CrownLogo" className="CrownLogo" />
                    <div className="d-flex">
                        <div className="VPRightBarWalletAccount_3">
                            Account Status
                        </div>
                        <div className="VPRightBarWalletAccount_4">
                            Active
                        </div>
                    </div>
                </div>

                <div className="VPRightBarWalletAccount_2">
                    <div className="d-flex">
                        <div className="VPRightBarWalletAccount_5">
                            Journeyman
                        </div>
                        <div className="VPRightBarWalletAccount_6">
                            Earnings Plan
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="VPRightBarWalletAccount_7">
                            <div className="VPRightBarWalletAccount_8">
                                1 Month Subscription
                            </div>
                            <div className="VPRightBarWalletAccount_9">
                                49.90<span className="VPRightBarWalletAccount_10">₺</span>
                            </div>
                            <div className="VPRightBarWalletAccount_8">
                                6 Month Subscription
                            </div>
                            <div className="VPRightBarWalletAccount_9">
                                229.90<span className="VPRightBarWalletAccount_10">₺</span>
                            </div>
                            <div className="VPRightBarWalletAccount_11">
                                Commission Rate<span className="VPRightBarWalletAccount_12">%25</span>
                            </div>
                        </div>
                        <div className="VPRightBarWalletAccount_7">
                            <div className="VPRightBarWalletAccount_8">
                                3 Month Subscription
                            </div>
                            <div className="VPRightBarWalletAccount_9">
                                129.90<span className="VPRightBarWalletAccount_10">₺</span>
                            </div>
                            <div className="VPRightBarWalletAccount_8">
                                1 Year Subscription
                            </div>
                            <div className="VPRightBarWalletAccount_9">
                                399.90<span className="VPRightBarWalletAccount_10">₺</span>
                            </div>
                        </div>
                        <div className="VPRightBarWalletAccount_7">
                            <div className="VPRightBarWalletAccount_15">
                                43.8<span className="VPRightBarWalletAccount_18">%</span>
                            </div>
                            <div className="VPRightBarWalletAccount_16">
                                Next Level<span className="VPRightBarWalletAccount_17">EXPERT</span>
                            </div>
                            <img src={Logo1} alt="Logo1" className="Logo1" />
                            <img src={Logo2} alt="Logo2" className="Logo2" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex" style={{ marginTop: "20px" }}>
                <div className="VPRightBarWalletAccount_19">
                    <img src={CheckLogo} alt="CheckLogo" className="CheckLogo" />
                    <div className="VPRightBarWalletAccount_20">
                        Unverified Account
                    </div>
                    <Button type="submit" className="Verify_account_button" outline>Verify Your Account</Button>
                </div>

                <div className="VPRightBarWalletAccount_13">
                    <div className="VPRightBarWalletAccount_27">
                        <div className="d-flex" style={{ textAlign: "center", justifyContent: "space-evenly", marginTop: "10px" }}>
                            <div>
                                <div className="VPRightBarWalletAccount_22">
                                    EXPERT
                                </div>
                                <div className="VPRightBarWalletAccount_23">
                                    Earnings Plan
                                </div>
                            </div>
                            <div>
                                <div className="VPRightBarWalletAccount_24">
                                    1 Month
                                </div>
                                <div className="VPRightBarWalletAccount_25">
                                    99.90<span className="VPRightBarWalletAccount_26">₺</span>
                                </div>
                            </div>
                            <div>
                                <div className="VPRightBarWalletAccount_24">
                                    1 Month
                                </div>
                                <div className="VPRightBarWalletAccount_25">
                                    99.90<span className="VPRightBarWalletAccount_26">₺</span>
                                </div>
                            </div>
                            <div>
                                <div className="VPRightBarWalletAccount_24">
                                    1 Month
                                </div>
                                <div className="VPRightBarWalletAccount_25">
                                    99.90<span className="VPRightBarWalletAccount_26">₺</span>
                                </div>
                            </div>
                            <div>
                                <div className="VPRightBarWalletAccount_24">
                                    1 Month
                                </div>
                                <div className="VPRightBarWalletAccount_25">
                                    99.90<span className="VPRightBarWalletAccount_26">₺</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="VPRightBarWalletAccount_27" style={{ marginTop: "20px" }}>
                        <div className="d-flex" style={{ justifyContent: "space-between" }}>
                            <div className="VPRightBarWalletAccount_28" style={{ marginLeft: "23.9px", marginTop: "6px" }}>
                                Estimated Earnings
                            </div>
                            <div className="d-flex">
                                <div className="VPRightBarWalletAccount_29" style={{ marginRight: "11.6px" }}>
                                    Journeyman
                                </div>
                                <div className="VPRightBarWalletAccount_30" style={{ marginRight: "11.6px" }}>
                                    Expert
                                </div>
                                <div className="VPRightBarWalletAccount_30" style={{ marginRight: "28.1px" }}>
                                    Maestro
                                </div>
                            </div>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="495" height="50" viewBox="0 0 471 4" style={{ marginTop: "-15px" }}>
                            <path id="Path_748" data-name="Path 748" d="M0,0H467" transform="translate(24 2)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-width="4" />
                            <circle id="Ellipse_2" data-name="Ellipse 2" cx="194" cy="1" r="11.5" fill="#4dd5ff" />
                            <path id="Path_207" data-name="Path 207" d="M22.035,0h168" transform="translate(2 2)" fill="none" stroke="#4dd5ff" stroke-linecap="round" stroke-width="4" />
                        </svg>
                        <div className="d-flex" style={{ justifyContent: "space-evenly", marginTop: "-10px" }}>
                            <div className="VPRightBarWalletAccount_31">
                                Subscriber Count<span className="VPRightBarWalletAccount_32">1356</span>
                            </div>
                            <div className="VPRightBarWalletAccount_31">
                                Earnings<span className="VPRightBarWalletAccount_32">21.610</span><span className="VPRightBarWalletAccount_33">₺</span>
                            </div>
                        </div>
                        {/* <MDBRange defaultValue={50} id="customRange" label="Example range" /> */}
                    </div>
                </div>
            </div>
            <div style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                <div className="VPRightBarWalletAccount_40">
                    <div className="VPRightBarWalletAccount_34">
                        Membership Date 22.05.2023
                    </div>
                    <div className="d-flex" style={{marginTop: "5px"}}>
                        <div className="VPRightBarWalletAccount_35">
                            Active Level
                        </div>
                        <div className="VPRightBarWalletAccount_36" style={{marginLeft: "3.8px"}}>
                            Journeyman
                        </div>
                        <div className="VPRightBarWalletAccount_35" style={{marginLeft: "12.2px"}}>
                            Membership Plan Price
                        </div>
                        <div className="VPRightBarWalletAccount_32" style={{marginLeft: "14.9px"}}>
                            249.90<span className="VPRightBarWalletAccount_33">₺</span>
                        </div>
                        <Button type="submit" className="Account_Renew_button" outline style={{marginLeft: "21.8px", marginTop: "-10px"}}>Renew</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default VPRightBarWalletAccount;