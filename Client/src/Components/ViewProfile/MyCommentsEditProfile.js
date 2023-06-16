import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HighLightAvatarVP from "../highlight/HighLightAvatarVP";
const MyCommentsEditProfile = () => {
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
                    <div className="VP_EP_LEFT_Text_field" style={{marginTop: "35px"}}>
                        Win
                    </div>
                    <div className="VP_EP_LEFT_Text5">
                        256
                    </div>
                </div>
                <div className="VP_EP_Middle">
                    <HighLightAvatarVP />
                    <div className="d-flex">
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
                </div>
                <div className="VP_EP_Right">
                    <div className="d-flex">
                        <svg id="user-edit" xmlns="http://www.w3.org/2000/svg" width="41.568" height="41.569" viewBox="0 0 41.568 41.569">
                            <path id="Path_150" data-name="Path 150" d="M0,0H41.568V41.569H0Z" fill="none" />
                            <path id="Path_151" data-name="Path 151" d="M8,9.928A6.928,6.928,0,1,0,14.928,3,6.928,6.928,0,0,0,8,9.928" transform="translate(5.856 2.196)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <path id="Path_152" data-name="Path 152" d="M6,25.392V21.928A6.928,6.928,0,0,1,12.928,15H18.99" transform="translate(4.392 10.98)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <path id="Path_153" data-name="Path 153" d="M20.924,16.06A3.637,3.637,0,0,1,26.068,21.2L20.2,27.128H15v-5.2Z" transform="translate(10.98 10.977)" fill="none" stroke="#4dd5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </svg>
                        <div className="VP_EP_Right_1">
                            Edit Profile
                        </div>
                    </div>
                    <div className="VP_EP_LEFT_Text_field">
                        Score Points
                    </div>
                    <div className="VP_EP_Right_3">
                        256
                    </div>
                    <div className="VP_EP_LEFT_Text_field">
                        Lose
                    </div>
                    <div className="VP_EP_Right_4">
                        256
                    </div>
                </div>
            </div>

        </div>
    );
};
export default MyCommentsEditProfile;