import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import VPRightBarSub4Card from "./VPRightBarSub4Card";
import VPRightBarSub4Card1 from "./VPRightBarSub4Card1";
import VPRightBarSub4Card2 from "./VPRightBarSub4Card2";
import VPRightBarSub4Card3 from "./VPRightBarSub4Card3";
import VPRightBarSub4Card_UK from "../../assets/indir.png";
import VPRightBarSub4Card_Italy from "../../assets/indir (2).png";
import VPRightBarSub4Card_Turkey from "../../assets/Roundel_flag_of_Turkey.svg.png";
import VPRightBarSub4Card_Spain from "../../assets/indir (3).png";
import VPRightBarSub4Card_Germany from "../../assets/indir (4).png";
import VPRightBarSub4Card_France from "../../assets/indir (5).png";
import VPRightBarSub4Card_Poland from "../../assets/indir (6).png";
const VPRigthBarSub4 = ({checkedBall, setCheckedBall}) => {    
    console.log(checkedBall, 'checkedBall')
    return (
        <div className="VPRigthBarSub4_out">
            <div className="d-flex justify-content-end">
                <div className="VPRigthBarSub4_1" onClick={() => {setCheckedBall(true)}}>
                    Football
                </div>
                <div className="VPRigthBarSub4_2" onClick={() => {setCheckedBall(false)}}>
                    Basketball
                </div>
            </div>
            <div className="VPRigthBarSub4_3">
                Comment Type
            </div>
            <div className="VPRigthBarSub4_4">
                <VPRightBarSub4Card />
                <VPRightBarSub4Card1 />
                <VPRightBarSub4Card2 />
                <VPRightBarSub4Card3 />
            </div>
            <div className="VPRigthBarSub4_5">
                Comment Journey
            </div>
            <div className="d-flex justify-content-end">
                <div className="VPRigthBarSub4_6">
                    According to the last 30 comments
                </div>
                <div className="VPRigthBarSub4_7">
                    %62
                </div>
            </div>
            <div className="d-flex VPRigthBarSub4_8">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2196" data-name="Rectangle 2196" fill="#ff5757" stroke="#0d2a53" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2187" data-name="Rectangle 2187" fill="#37ff80" stroke="#0d2a53" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2190" data-name="Rectangle 2190" fill="#37ff80" stroke="#0d2a53" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="16" viewBox="0 0 31 16">
                    <g id="Rectangle_2193" data-name="Rectangle 2193" fill="#37ff80" stroke="#0d2a53" stroke-width="2">
                        <rect width="31" height="16" stroke="none" />
                        <rect x="1" y="1" width="29" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2200" data-name="Rectangle 2200" fill="#ff5757" stroke="#0d2a53" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="16" viewBox="0 0 31 16">
                    <g id="Rectangle_2203" data-name="Rectangle 2203" fill="#ff5757" stroke="#0d2a53" stroke-width="2">
                        <rect width="31" height="16" stroke="none" />
                        <rect x="1" y="1" width="29" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2185" data-name="Rectangle 2185" fill="#37ff80" stroke="#0d2a53" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="16" viewBox="0 0 31 16">
                    <g id="Rectangle_2198" data-name="Rectangle 2198" fill="#ff5757" stroke="#0d2a53" stroke-width="2">
                        <rect width="31" height="16" stroke="none" />
                        <rect x="1" y="1" width="29" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2189" data-name="Rectangle 2189" fill="#37ff80" stroke="#0d2a53" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2192" data-name="Rectangle 2192" fill="#37ff80" stroke="#0d2a53" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2195" data-name="Rectangle 2195" fill="#37ff80" stroke="#0d2a53" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2202" data-name="Rectangle 2202" fill="#ff5757" stroke="#0d2a53" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2205" data-name="Rectangle 2205" fill="#ff5757" stroke="#0d2a53" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2184" data-name="Rectangle 2184" fill="#37ff80" stroke="#0d2a53" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2197" data-name="Rectangle 2197" fill="#ff5757" stroke="#0d2a53" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2188" data-name="Rectangle 2188" fill="#37ff80" stroke="#0d2a53" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2191" data-name="Rectangle 2191" fill="#37ff80" stroke="#0d2a53" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2194" data-name="Rectangle 2194" fill="#37ff80" stroke="#0d2a53" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2201" data-name="Rectangle 2201" fill="#ff5757" stroke="#0d2a53" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2204" data-name="Rectangle 2204" fill="#ff5757" stroke="#0d2a53" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2186" data-name="Rectangle 2186" fill="#0b2447" stroke="#0d2a53" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16">
                    <g id="Rectangle_2199" data-name="Rectangle 2199" fill="#0b2447" stroke="#0d2a53" stroke-width="2">
                        <rect width="32" height="16" stroke="none" />
                        <rect x="1" y="1" width="30" height="14" fill="none" />
                    </g>
                </svg>
            </div>
            <div className="VPRigthBarSub4_9">
                Leagues
            </div>
            <div className="VPRigthBarSub4_10">
                <div className="d-flex">
                    <img src={VPRightBarSub4Card_UK} alt="VPRightBarSub4Card_UK" className="VPRightBarSub4Card_UK" />
                    <div className="VPRigthBarSub4_11">
                        Premier League 28
                    </div>
                </div>
                <div className="d-flex">
                    <img src={VPRightBarSub4Card_Italy} alt="VPRightBarSub4Card_UK" className="VPRightBarSub4Card_UK" />
                    <div className="VPRigthBarSub4_12">
                        Seria A 28
                    </div>
                </div>
                <div className="d-flex">
                    <img src={VPRightBarSub4Card_Turkey} alt="VPRightBarSub4Card_UK" className="VPRightBarSub4Card_UK" />
                    <div className="VPRigthBarSub4_13">
                        Süper Lig 28
                    </div>
                </div>
                <div className="d-flex">
                    <img src={VPRightBarSub4Card_Spain} alt="VPRightBarSub4Card_UK" className="VPRightBarSub4Card_UK" />
                    <div className="VPRigthBarSub4_14">
                        La Liga 28
                    </div>
                </div>
            </div>
            <div className="VPRigthBarSub4_10">
                <div className="d-flex" style={{ marginLeft: "59px" }}>
                    <img src={VPRightBarSub4Card_Germany} alt="VPRightBarSub4Card_UK" className="VPRightBarSub4Card_UK" />
                    <div className="VPRigthBarSub4_15">
                        Bundesliga 28
                    </div>
                </div>
                <div className="d-flex">
                    <img src={VPRightBarSub4Card_UK} alt="VPRightBarSub4Card_UK" className="VPRightBarSub4Card_UK" />
                    <div className="VPRigthBarSub4_11">
                        Championship 28
                    </div>
                </div>
                <div className="d-flex" style={{ marginLeft: "19px" }}>
                    <img src={VPRightBarSub4Card_Italy} alt="VPRightBarSub4Card_UK" className="VPRightBarSub4Card_UK" />
                    <div className="VPRigthBarSub4_12">
                        Seria B 28
                    </div>
                </div>
                <div className="d-flex" style={{ marginLeft: "44px" }}>
                    <img src={VPRightBarSub4Card_France} alt="VPRightBarSub4Card_UK" className="VPRightBarSub4Card_UK" />
                    <div className="VPRigthBarSub4_16">
                        League 1 28
                    </div>
                </div>
            </div>
            <div className="VPRigthBarSub4_17" style={{marginLeft: "-14px"}}>
                <div className="d-flex">
                    <img src={VPRightBarSub4Card_Turkey} alt="VPRightBarSub4Card_UK" className="VPRightBarSub4Card_UK" />
                    <div className="VPRigthBarSub4_13">
                        PTT 1.Lig 28
                    </div>
                </div>
                <div className="d-flex">
                    <img src={VPRightBarSub4Card_Poland} alt="VPRightBarSub4Card_UK" className="VPRightBarSub4Card_UK" />
                    <div className="VPRigthBarSub4_18">
                        Ekstraklasa 28
                    </div>
                </div>
            </div>

        </div>
    );
};
export default VPRigthBarSub4;