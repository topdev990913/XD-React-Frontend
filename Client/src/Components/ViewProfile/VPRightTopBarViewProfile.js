import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Button } from "reactstrap";
const VPRightTopBarViewProfile = () => {
    return (
        <div className="VP_Right_TopBar_out">
            <div className="d-flex">
                <Button type="submit" className="VPVP_Follow_button" outline style={{marginTop: "17px"}}>Follow</Button>
                <Button type="submit" className="VPVP_Add_Favorite_button" outline style={{marginLeft: "20px", marginTop: "17px"}}>
                    <div className="d-flex justify-content-center">
                        <svg id="star" xmlns="http://www.w3.org/2000/svg" width="29.312" height="29.312" viewBox="0 0 29.312 29.312" style={{marginTop: "3px"}}>
                            <path id="Path_272" data-name="Path 272" d="M0,0H29.312V29.312H0Z" fill="none" />
                            <path id="Path_273" data-name="Path 273" d="M14.212,21.235,6.674,25.2,8.114,16.8,2.007,10.86l8.427-1.221L14.2,2l3.769,7.637L26.4,10.86,20.293,16.8l1.44,8.394Z" transform="translate(0.444 0.443)" fill="none" stroke="#fc0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </svg>
                        <div>
                            Add Favorite
                        </div>
                    </div>
                </Button>
            </div>
        </div>
    );
};
export default VPRightTopBarViewProfile;