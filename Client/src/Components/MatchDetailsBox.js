import React from "react";
import "../Css/Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Champion from '../assets/994_champions_league.png';
import Earth from '../assets/world-check.png';
import Clock_logo from '../assets/Path 694.png';
const MatchDetailsBox = ({ checkedForYou, setCheckedForYou }) => {
    return (
        <div className="MatchDetailsBox_out">
            <div className="d-flex display_MatchDetail">
                <div className="d-flex justify-content-start align-items-center">
                    <img src={Champion} alt="Champion" className="Champion_Logo_Size" />
                    <div className="Champion_text" style={{marginLeft: "4px"}}>Champions League</div>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                    <div className="Champion_text_public">Public Content</div>
                    <img src={Earth} alt="Earth" className="Earth_Logo_Size" />
                </div>
            </div>
            <div className="d-flex justify-content-center Champion_text" style={{ marginTop: "-28px" }}>
                07.05.2023
            </div>
            <div className="d-flex justify-content-center">
                <div className="d-flex" style={{marginTop: "30px"}}>
                    <div className="Champion_text">
                        Galatasaray FC
                    </div>
                    <div>
                        <img src={Clock_logo} alt="Clock_logo" className="Clock_logo_Size" />
                        <div className="Champion_text_1 ">
                            14:30
                        </div>
                    </div>
                    <div className="Champion_text">
                        Real Madrid
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end MatchingDetailFooterButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="262.29" height="43.773" viewBox="0 0 262.29 43.773">
                    <rect id="Rectangle_1306" data-name="Rectangle 1306" width="262.29" height="43.773" rx="6" fill="#00659d" />
                    {checkedForYou === 1 ?
                        <text id="Subscribers_only" data-name="Subscribers only" transform="translate(0 22)" fill="#e6e6e6" font-size="20" font-family="SegoeUI, Segoe UI"><tspan x="40" y="7">Subscribers only</tspan></text>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="186" height="27" viewBox="0 0 186 27">
                            <text id="FT_-_Home_-_2.5_Over" data-name="FT - Home - 2.5 Over" transform="translate(0 22)" fill="#e6e6e6" font-size="20" font-family="SegoeUI, Segoe UI"><tspan x="10" y="5">FT-Home-2.5 Over</tspan></text>
                        </svg>
                    }
                    <rect id="Rectangle_2376" data-name="Rectangle 2376" x="200" y="4" width="3" height="36" fill="#0b2447" />
                    {checkedForYou === 1 ?
                        <g id="lock" transform="translate(210 0)">
                            <path id="Path_426" data-name="Path 426" d="M0,0H44.541V44.54H0Z" transform="translate(0 0)" fill="none" />
                            <path id="Path_427" data-name="Path 427" d="M5,14.712A3.712,3.712,0,0,1,8.712,11H27.27a3.712,3.712,0,0,1,3.712,3.712V25.847a3.712,3.712,0,0,1-3.712,3.712H8.712A3.712,3.712,0,0,1,5,25.847Z" transform="translate(4.279 9.415)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                            <path id="Path_428" data-name="Path 428" d="M11,16.856A1.856,1.856,0,1,0,12.856,15,1.856,1.856,0,0,0,11,16.856" transform="translate(9.414 12.838)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                            <path id="Path_429" data-name="Path 429" d="M8,17.847V10.423a7.423,7.423,0,0,1,14.847,0v7.423" transform="translate(6.847 2.568)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                        </g>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="460" height="27" viewBox="0 0 37 27">
                            <text id="_2.40" data-name="2.40" transform="translate(0 27)" fill="#e6e6e6" font-size="20" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">2.40</tspan></text>
                        </svg>
                    }
                </svg>

            </div>

        </div>


    );
};
export default MatchDetailsBox;
