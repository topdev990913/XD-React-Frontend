import React from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import TopBar from "../Components/TopBar";
import SideBar from "../Components/SideBar";
import './WebPartPages.css';
import MyCommentsEditProfile from "../Components/ViewProfile/MyCommentsEditProfile";
const ViewProfile = () => {
    return (
        <>
            <TopBar />
            <div className="d-flex">
                <div className="SideBar_Home_out">
                    <SideBar />
                </div>
                <div className="ViewProfile_Mycomments_1">
                    <MyCommentsEditProfile />
                </div>
                <div className="ViewProfile_Mycomments_2">

                </div>
            </div>
        </>
    );
};
export default ViewProfile;
