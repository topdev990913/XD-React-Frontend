import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import User_Profile_Blue_Logo from '../../assets/user-edit-Green.png';
const MyCommentsEditProfileStar = () => {
    return (
        <div className="VP_MC_EP_out_star">
            <div className="VP_MC_EP_out_star_1 d-flex justify-content-end">
                <img src={User_Profile_Blue_Logo} alt="User_Profile_Blue_Logo" className="User_Profile_Blue_Logo" />
                <div className="VP_MC_EP_out_star_2">Edit Profile</div>
            </div>
        </div>
    );
};
export default MyCommentsEditProfileStar;