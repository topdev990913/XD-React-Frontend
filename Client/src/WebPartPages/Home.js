import React, { useState } from "react";
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
import MainBarEdit from "../Components/MainBar_Edit";
import MainBarComments from "../Components/MainBarComments";
const Home = () => {
    const [checkedForYou, setCheckedForYou] = useState(1);
    const [checkedMainOption, setCheckedMainOption] = useState(1)
    const displayCase = () => {
        switch (checkedMainOption) {
            case 1: return <>
                <MainTopBar checkedForYou={checkedForYou} setCheckedForYou={setCheckedForYou} />
                <MainMiddleBar checkedForYou={checkedForYou} setCheckedForYou={setCheckedForYou} />
                <MainMiddleBar checkedForYou={checkedForYou} setCheckedForYou={setCheckedForYou} />
            </>
            case 2: return <MainBarEdit />
            case 3: return <MainBarComments />
            default: return <>
                <MainTopBar checkedForYou={checkedForYou} setCheckedForYou={setCheckedForYou} />
                <MainMiddleBar checkedForYou={checkedForYou} setCheckedForYou={setCheckedForYou} />
                <MainMiddleBar checkedForYou={checkedForYou} setCheckedForYou={setCheckedForYou} />
            </>
        }
    }
    return (
        <>
            <TopBar />
            <div className="d-flex">
                <div className="SideBar_Home_out">
                    <SideBar checkedMainOption={checkedMainOption} setCheckedMainOption={setCheckedMainOption} />
                </div>
                <div style={{ width: "calc(100% - 74px)" }}>
                    <div className="row">
                        <div className="MainBar_out">
                            {displayCase()}
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
