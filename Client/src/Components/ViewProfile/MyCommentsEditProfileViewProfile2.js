import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HighLightAvatarVP from "../highlight/HighLightAvatarVP";
import PieChatBack from '../../assets/Path 160.png';
import PieChatProgress from '../../assets/Path 159.png';
import { Button, Col } from "reactstrap";
const MyCommentsEditProfileViewProfile2 = ({ checkedVPball, setCheckedVpball }) => {
    return (
        <div className="VP_MC_EP_out">
            <div className="d-flex display_VP">
                <div className="VP_EP_Left">
                    <div className="VP_EP_LEFT_Text_field">
                        Success Rate
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="VP_EP_LEFT_Text2">
                            67.6
                        </div>
                        <div className="VP_EP_LEFT_Text3">
                            %
                        </div>
                    </div>
                    <div className="VP_EP_LEFT_Text_field" style={{ marginTop: "35px" }}>
                        Win
                    </div>
                    <div className="VP_EP_LEFT_Text5">
                        256
                    </div>
                    <div className="VP_EP_LEFT_Text6">
                        Subscribers
                    </div>
                    <div className="VP_EP_LEFT_Text7">
                        1.369
                    </div>
                </div>
                <div className="VP_EP_Middle">
                    <HighLightAvatarVP />
                    <div className="d-flex align-items-center" style={{ marginTop: "79px" }}>
                        <div className="VP_EP_Middle_1">
                            melih1905
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23.246" height="22.116" viewBox="0 0 23.246 22.116">
                            <path id="Path_check-decagram" data-name="Path / check-decagram" d="M24.246,12.592,21.668,9.655l.359-3.888L18.213,4.9l-2-3.36L12.623,3.083,9.03,1.54l-2,3.36-3.814.856.359,3.888L1,12.592,3.578,15.53l-.359,3.9,3.814.866,2,3.36L12.623,22.1l3.593,1.543,2-3.36,3.814-.866-.359-3.888,2.578-2.937M10.51,17.876,6.283,13.649l1.49-1.49,2.737,2.726,6.963-6.963,1.49,1.5Z" transform="translate(-1 -1.54)" fill="#00d4ff" />
                        </svg>
                    </div>
                    <div className="VP_EP_Middle_2">
                        Ankara/Türkiye
                    </div>
                    <div className="VP_EP_Middle_2">
                        22.04.2022
                    </div>
                    <div className="VP_EP_Middle_3">
                        <img src={PieChatBack} alt="PieChatBack" className="PieChatBack" />
                        <img src={PieChatProgress} alt="PieChatProgress" className="PieChatProgress" />
                        <div className="d-flex VP_EP_Middle_4">
                            <div className="VP_EP_LEFT_Middle_5">
                                45
                            </div>
                            <div className="VP_EP_LEFT_Middle_6">
                                %
                            </div>
                        </div>
                        <Button type="submit" color="info" className="VP_EP_Button" outline>expert</Button>
                    </div>
                </div>
                <div className="VP_EP_Right">
                    <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "10px" }}>
                        <svg id="user-edit" xmlns="http://www.w3.org/2000/svg" width="41.568" height="41.569" viewBox="0 0 41.568 41.569">
                            <path id="Path_150" data-name="Path 150" d="M0,0H41.568V41.569H0Z" fill="none" />
                            <path id="Path_151" data-name="Path 151" d="M8,9.928A6.928,6.928,0,1,0,14.928,3,6.928,6.928,0,0,0,8,9.928" transform="translate(5.856 2.196)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <path id="Path_152" data-name="Path 152" d="M6,25.392V21.928A6.928,6.928,0,0,1,12.928,15H18.99" transform="translate(4.392 10.98)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <path id="Path_153" data-name="Path 153" d="M20.924,16.06A3.637,3.637,0,0,1,26.068,21.2L20.2,27.128H15v-5.2Z" transform="translate(10.98 10.977)" fill="none" stroke="#4dd5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </svg>
                        <div className="VP_EP_Right_1" style={{ marginLeft: "5px" }}>
                            Edit Profile
                        </div>
                    </div>
                    <div className="VP_EP_LEFT_Text_field" style={{ marginTop: "10px" }}>
                        Score Points
                    </div>
                    <div className="VP_EP_Right_3">
                        256
                    </div>
                    <div className="VP_EP_LEFT_Text_field" style={{ marginTop: "35px" }}>
                        Lose
                    </div>
                    <div className="VP_EP_Right_4">
                        256
                    </div>
                    <div className="VP_EP_LEFT_Text6">
                        Followers
                    </div>
                    <div className="VP_EP_LEFT_Text7">
                        1.369
                    </div>
                </div>
            </div>
            <div className="VP_EP_LEFT_SUB_out">
                <div className="d-flex align-items-center display_VP">
                    <Col className="d-flex align-items-center justify-content-start VP_EP_LEFT_SUB_1">
                        Category
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center">
                        <div className="d-flex align-items-center" style={{ marginTop: "5px" }}>
                            <svg id="ball-basketball_1_" data-name="ball-basketball (1)" xmlns="http://www.w3.org/2000/svg" width="35.016" height="35.016" viewBox="0 0 35.016 35.016">
                                <path id="Path_58" data-name="Path 58" d="M0,0H35.016V35.015H0Z" transform="translate(0 0)" fill="none" />
                                <path id="Path_59" data-name="Path 59" d="M16.1,16.1,3,16.1A13.1,13.1,0,1,0,16.1,3,13.1,13.1,0,0,0,3,16.1" transform="translate(1.405 1.405)" fill="none" stroke="#ff9100" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                <path id="Path_60" data-name="Path 60" d="M5.65,5.65,24.072,24.072" transform="translate(2.647 2.647)" fill="none" stroke="#ff9100" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                <path id="Path_61" data-name="Path 61" d="M5.65,24.072,24.072,5.65" transform="translate(2.647 2.647)" fill="none" stroke="#ff9100" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                <path id="Path_62" data-name="Path 62" d="M12,3A13.216,13.216,0,0,0,25.216,16.216" transform="translate(5.394 1.405)" fill="none" stroke="#ff9100" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                <path id="Path_63" data-name="Path 63" d="M3,12A13.216,13.216,0,0,1,16.216,25.216" transform="translate(1.405 5.394)" fill="none" stroke="#ff9100" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                            </svg>
                            <svg id="ball-football_1_" data-name="ball-football (1)" xmlns="http://www.w3.org/2000/svg" width="35.016" height="35.016" viewBox="0 0 35.016 35.016">
                                <path id="Path_54" data-name="Path 54" d="M0,0H35.016V35.015H0Z" fill="none" />
                                <path id="Path_55" data-name="Path 55" d="M16.067,16.067,3,16.067A13.067,13.067,0,1,0,16.067,3,13.067,13.067,0,0,0,3,16.067" transform="translate(1.441 1.441)" fill="none" stroke="#00c936" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                <path id="Path_56" data-name="Path 56" d="M14.286,7l7.046,5.107-2.605,8.215H9.845L7.24,12.107Z" transform="translate(3.222 3.124)" fill="none" stroke="#00c936" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                <path id="Path_57" data-name="Path 57" d="M15.827,8.921V3m4.351,19.243L23.8,26.684M22.73,14.028l5.424-2.146M11.563,22.317,7.851,26.684M8.924,14.028,3.5,11.882" transform="translate(1.681 1.441)" fill="none" stroke="#00c936" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                            </svg>
                        </div>
                    </Col>
                </div>
            </div>
            <div className="VP_EP_LEFT_SUB_out_1">
                <div className="d-flex display_VP">
                    <Col className="d-flex align-items-center justify-content-start VP_EP_LEFT_SUB_1" style={{ marginTop: "7px" }}>
                        Comment Count
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center" style={{ marginTop: "7px" }}>
                        <div className="d-flex align-items-center VP_EP_LEFT_SUB_1">
                            346
                        </div>
                    </Col>
                </div>
            </div>
            <div className="VP_EP_LEFT_SUB_out_1">
                <div className="d-flex display_VP">
                    <Col className="d-flex align-items-center justify-content-start VP_EP_LEFT_SUB_1" style={{ marginTop: "7px" }}>
                        Average Odds
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center" style={{ marginTop: "7px" }}>
                        <div className="d-flex align-items-center VP_EP_LEFT_SUB_1">
                            1.70
                        </div>
                    </Col>
                </div>
            </div>
            <div className="VP_EP_LEFT_SUB_out_1">
                <div className="d-flex display_VP">
                    <Col className="d-flex align-items-center justify-content-start VP_EP_LEFT_SUB_1" style={{ marginTop: "7px" }}>
                        Leagues
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center" style={{ marginTop: "7px" }}>
                        <div className="d-flex align-items-center VP_EP_LEFT_SUB_1">
                            UK Premier League + 3
                        </div>
                    </Col>
                </div>
            </div>
            <div className="d-flex justify-content-center" style={{ marginTop: "8px" }}>
                {checkedVPball === 1 ?
                    <Button type="submit" className="VPVP_Cancel_Subscription" outline>Cancel Subscription</Button>
                    :
                    <Button type="submit" className="VPVP_Renew_Subscription" outline>Renew Subscription</Button>
                }
            </div>
        </div>
    );
};
export default MyCommentsEditProfileViewProfile2;