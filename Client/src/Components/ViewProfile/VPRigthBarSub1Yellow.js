import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainMiddleBarFooter1 from "../MainMiddleBarFooter1";
import TurkeyLogo from '../../assets/Roundel_flag_of_Turkey.svg1111.png';
import RightLogo from '../../assets/Path 660.png';
const VPRigthBarSub1Yellow = () => {
    return (
        <div className="VPRigthBarSub1_out">
            <div className="VPRigthBarSub1_1">
                2012  yılından beri profesyonel olarak maçları takip ediyorum. Premier lig konusunda uzmanım.
                Yorumlarımı takip ettiğiniz için teşekkürler. 2012  yılından beri profesyonel olarak maçları takip
                ediyorum. Premier lig konusunda uzmanım. Yorumlarımı takip ettiğiniz için teşekkürler.
            </div>
            <div className="VPRigthBarSub1_2">
                <div className="d-flex">
                    <img src={TurkeyLogo} alt="TurkeyLogo" className="TurkeyLogo" />
                    <div className="VPRigthBarSub1_3">
                        Süper Lig
                    </div>
                    <svg id="clock-pause" xmlns="http://www.w3.org/2000/svg" width="41.439" height="41.439" viewBox="0 0 41.439 41.439" style={{ marginLeft: "521px", marginTop: "11px" }}>
                        <path id="Path_641" data-name="Path 641" d="M0,0H41.439V41.439H0Z" fill="none" />
                        <path id="Path_642" data-name="Path 642" d="M33.979,20.3A15.539,15.539,0,1,0,20.323,33.976" transform="translate(2.18 2.179)" fill="none" stroke="#fc0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_643" data-name="Path 643" d="M12,7v8.633l3.453,3.453" transform="translate(8.719 5.086)" fill="none" stroke="#fc0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_644" data-name="Path 644" d="M17,17v8.633" transform="translate(12.352 12.352)" fill="none" stroke="#fc0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_645" data-name="Path 645" d="M21,17v8.633" transform="translate(15.259 12.352)" fill="none" stroke="#fc0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>

                </div>
                <div className="d-flex RightBar_VP">
                    <div className="VPRigthBarSub1_4">
                        Antalyaspor
                    </div>
                    <div className="VPRigthBarSub1_4" style={{ marginLeft: "133.1px" }}>
                        Başakşehir
                    </div>
                </div>
                <div className="VPRigthBarSub1_5">
                    <img src={RightLogo} alt="RightLogo" className="RightLogo" />
                    <div className="VPRigthBarSub1_6">
                        07.05.2023
                    </div>
                    <div className="VPRigthBarSub1_7">
                        3 - 1
                    </div>
                </div>
                <div className="VPRigthBarSub1_13">
                    the match has been stopped
                </div>
                <div className="d-flex justify-content-end" style={{ marginTop: "-30px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="262.29" height="43.773" viewBox="0 0 262.29 43.773">
                        <rect id="Rectangle_1306" data-name="Rectangle 1306" width="262.29" height="43.773" rx="6" fill="#FFCC00" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="186" height="27" viewBox="0 0 186 27">
                            <text id="FT_-_Home_-_2.5_Over" data-name="FT - Home - 2.5 Over" transform="translate(0 22)" fill="#0D2A53" font-size="20" font-family="SegoeUI, Segoe UI"><tspan x="10" y="5">FT-Home-2.5 Over</tspan></text>
                        </svg>
                        <rect id="Rectangle_2376" data-name="Rectangle 2376" x="200" y="4" width="3" height="36" fill="#0b2447" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="460" height="27" viewBox="0 0 37 27">
                            <text id="_2.40" data-name="2.40" transform="translate(0 27)" fill="#0D2A53" font-size="20" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">2.40</tspan></text>
                        </svg>
                    </svg>
                </div>
            </div>
            <div style={{ marginTop: "-16px" }}>
                <MainMiddleBarFooter1 />
            </div>
        </div>
    );
};
export default VPRigthBarSub1Yellow;