import React, { useState } from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import SideBar from "../Components/SideBar";
import './WebPartPages.css';
import VPAbout from "../Components/ViewProfile/VPAbout";
import VPRigthBarSub1 from "../Components/ViewProfile/VPRigthBarSub1";
import VPRigthBarSub2ViewProfile from "../Components/ViewProfile/VPRightBarSub2ViewProfile";
import MyCommentsEditProfileViewProfile from "../Components/ViewProfile/MyCommentsEditProfileViewProfile";
import TopBarViewProfile from "../Components/TopBarViewProfile";
import VPRightTopBarViewProfile from "../Components/ViewProfile/VPRightTopBarViewProfile";
import VPRightBarSubTopBarViewProfile from "../Components/ViewProfile/VPRightBarSubTopBarViewProfile";
import VPRigthBarSub11 from "../Components/ViewProfile/VPRigthBarSub11";
import Sub3Logo from '../assets/mobil_banner_a2f8d.png';
import MyCommentsEditProfileViewProfile1 from "../Components/ViewProfile/MyCommentsEditProfileViewProfile1";
import VPRigthBarSub1Green from "../Components/ViewProfile/VPRigthBarSub1Green";
import VPRigthBarSub1Yellow from "../Components/ViewProfile/VPRigthBarSub1Yellow";
import VPRigthBarSub41 from "../Components/ViewProfile/VPRightBarSub41";
import MyCommentsEditProfileViewProfile2 from "../Components/ViewProfile/MyCommentsEditProfileViewProfile2";
const FavoriteViewProfile = () => {
    const [checkedVPball, setCheckedVpball] = useState(1);
    const [checkedVPSubTopBar, setCheckedVPSubTopBar] = useState(1);    
    const displaycase = () => {
        if (checkedVPSubTopBar === 1) return <>
            <MyCommentsEditProfileViewProfile checkedVPSubTopBar={checkedVPSubTopBar} setCheckedVPSubTopBar={setCheckedVPSubTopBar} />
        </>
        if (checkedVPSubTopBar === 2) return<>
            <MyCommentsEditProfileViewProfile1  checkedVPball={checkedVPball} setCheckedVpball={setCheckedVpball} checkedVPSubTopBar={checkedVPSubTopBar} setCheckedVPSubTopBar={setCheckedVPSubTopBar} />
        </>
        if (checkedVPSubTopBar === 3) return<>
        <MyCommentsEditProfileViewProfile2  checkedVPball={checkedVPball} setCheckedVpball={setCheckedVpball} checkedVPSubTopBar={checkedVPSubTopBar} setCheckedVPSubTopBar={setCheckedVPSubTopBar} />
    </>
    }
    const displaysubtitle = () => {
        if (checkedVPSubTopBar === 1) return <>
            <VPRigthBarSub1 />
            <VPRigthBarSub11 />
        </>
        if (checkedVPSubTopBar === 2) return <>
            <VPRigthBarSub1Green />
            <VPRigthBarSub1Yellow />
        </>
        if (checkedVPSubTopBar === 3) return <>
        <VPRigthBarSub41 checkedVPball={checkedVPball} setCheckedVpball={setCheckedVpball} />
    </>
    }
    return (
        <>
            <TopBarViewProfile />
            <div className="d-flex">
                <div className="SideBar_Home_out">
                    <SideBar />
                </div>
                <div className="ViewProfile_Mycomments_1">
                    {displaycase()}
                    <VPAbout />
                </div>
                <div className="ViewProfile_Mycomments_2">
                    <VPRightTopBarViewProfile />
                    <div className="d-flex">
                        <div className="VP_RightBarSub1_out">
                            <VPRightBarSubTopBarViewProfile checkedVPSubTopBar={checkedVPSubTopBar} setCheckedVPSubTopBar={setCheckedVPSubTopBar} />
                            {displaysubtitle()}
                        </div>
                        <div className="VP_RightBarSub2_out">
                            <VPRigthBarSub2ViewProfile />
                            <img src={Sub3Logo} alt="Sub3Logo" className="Sub3Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FavoriteViewProfile;
