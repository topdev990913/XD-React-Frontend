import React from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import TopBar from "../Components/TopBar";
import SideBar from "../Components/SideBar";
import './WebPartPages.css';
import MainTopBar from "../Components/MainTopBar";
import AdvertisementBanner from "../Components/AdvertisementBanner";
import LeftBarHighlight from "../Components/LeftBarHighlight";
import MainMiddleBar from "../Components/MainMiddleBar";
const Home = () => {
    return (
        <>
            <TopBar />
            <div className="d-flex">
                <div className="SideBar_Home_out">
                    <SideBar />
                </div>
                <div style={{width: "calc(100% - 74px)"}}>
                    <div className="row">
                        <div className="MainBar_out">
                            <MainTopBar />
                            <MainMiddleBar />
                            <MainMiddleBar />
                        </div>
                        <div className="RightBar_out">
                            <AdvertisementBanner />
                            <LeftBarHighlight />
                        </div>
                    </div>
                </div>
            </div>
        </>
        // </div>
    );
};
export default Home;
