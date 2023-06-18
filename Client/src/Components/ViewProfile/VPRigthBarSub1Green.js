import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainMiddleBarFooter1 from "../MainMiddleBarFooter1";
import TurkeyLogo from '../../assets/Roundel_flag_of_Turkey.svg1111.png';
import RightLogo from '../../assets/Path 5011.png';
const VPRigthBarSub1Green = () => {
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
                    <svg id="world-check" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" style={{marginLeft: "428px", marginTop: "11px"}}>
                        <path id="Path_554" data-name="Path 554" d="M0,0H42V42H0Z" fill="none" />
                        <path id="Path_555" data-name="Path 555" d="M34.164,20.348A15.629,15.629,0,1,0,17.736,34.232" transform="translate(2.371 2.371)" fill="none" stroke="#4dd5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_556" data-name="Path 556" d="M3.6,9H32.71" transform="translate(2.845 6.75)" fill="none" stroke="#4dd5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_557" data-name="Path 557" d="M3.6,15H28.485" transform="translate(2.845 11.25)" fill="none" stroke="#4dd5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_558" data-name="Path 558" d="M13.464,3a28.916,28.916,0,0,0,0,31.115" transform="translate(6.648 2.371)" fill="none" stroke="#4dd5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_559" data-name="Path 559" d="M12.5,3a28.88,28.88,0,0,1,4.137,20.879" transform="translate(9.314 2.371)" fill="none" stroke="#4dd5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_560" data-name="Path 560" d="M15,20.581l3.581,3.581L25.742,17" transform="translate(10.887 12.468)" fill="none" stroke="#4dd5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                    <svg id="square-rounded-check" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" style={{marginLeft: "47px", marginTop: "11px"}}>
                        <path id="Path_161" data-name="Path 161" d="M0,0H40V40H0Z" fill="none" />
                        <path id="Path_162" data-name="Path 162" d="M9,15.288l5.288,5.288L24.863,10" transform="translate(3.069 4.712)" fill="none" stroke="#37ff80" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_163" data-name="Path 163" d="M17.988,3C29.979,3,32.977,6,32.977,17.988s-3,14.988-14.988,14.988S3,29.979,3,17.988,6,3,17.988,3Z" transform="translate(2.012 2.012)" fill="none" stroke="#37ff80" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
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
                <div className="d-flex justify-content-end" style={{ marginTop: "25px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="262.29" height="43.773" viewBox="0 0 262.29 43.773">
                        <rect id="Rectangle_1306" data-name="Rectangle 1306" width="262.29" height="43.773" rx="6" fill="#37FF80" />
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
export default VPRigthBarSub1Green;