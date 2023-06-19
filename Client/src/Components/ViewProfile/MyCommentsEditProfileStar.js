import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import User_Profile_Blue_Logo from '../../assets/user-edit-Green.png';
import User_Star_Logo from '../../assets/portrait-of-happy-and-cheerful-handsome-adult-man-2022-02-07-02-02-56-utc199.png';
import camera_Star_Logo from '../../assets/camera-plus.png';
import { Button } from "reactstrap";
const MyCommentsEditProfileStar = () => {
    return (
        <div className="VP_MC_EP_out_star">
            <div className="d-flex justify-content-end VP_MC_EP_out_star_1">
                <img src={User_Profile_Blue_Logo} alt="User_Profile_Blue_Logo" className="User_Profile_Blue_Logo" />
                <div className="VP_MC_EP_out_star_2">Edit Profile</div>
            </div>
            <div className="d-flex justify-content-center">
                <img src={User_Star_Logo} alt="User_Star_Logo" className="User_Star_Logo" />
                <img src={camera_Star_Logo} alt="camera_Star_Logo" className="camera_Star_Logo" />
            </div>
            <div className="VP_MC_EP_out_star_3">
                kingof35
            </div>
            <div className="VP_MC_EP_out_star_4">
                22.04.2022
            </div>
            <div className="d-flex VP_MC_EP_out_star_5">
                <div className="VP_MC_EP_out_star_0">
                    <div className="VP_MC_EP_out_star_6">
                        Subscriptions
                    </div>
                    <div className="VP_MC_EP_out_star_7">
                        1.369
                    </div>
                </div>
                <div className="VP_MC_EP_out_star_0">
                    <div className="VP_MC_EP_out_star_6">
                        Following
                    </div>
                    <div className="VP_MC_EP_out_star_7">
                        1.369
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <Button type="submit" className="Deactivate_account_button" outline>Deactivate Account</Button>            
            </div>
        </div>
    );
};
export default MyCommentsEditProfileStar;