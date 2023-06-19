import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainMiddleBarFooter1 from "../MainMiddleBarFooter1";
import TurkeyLogo from '../../assets/Roundel_flag_of_Turkey.svg1111.png';
import RightLogo from '../../assets/Path 501.png';
import Admin_Logo from '../../assets/Admin_Logo.png';
const VPRigthBarFavourite1 = () => {
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
                        14:30
                    </div>
                </div>
                <div className="d-flex" style={{ marginTop: "25px", justifyContent: "space-between" }}>
                    <div className="d-flex align-items-center" style={{marginTop: "-10px"}}>
                        <img src={Admin_Logo} alt="Admin_Logo" className="Admin_Logo" />
                        <div className="Admin_Logo_text">
                            melih1905
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23.246" height="22.116" viewBox="0 0 23.246 22.116">
                            <path id="Path_check-decagram" data-name="Path / check-decagram" d="M24.246,12.592,21.668,9.655l.359-3.888L18.213,4.9l-2-3.36L12.623,3.083,9.03,1.54l-2,3.36-3.814.856.359,3.888L1,12.592,3.578,15.53l-.359,3.9,3.814.866,2,3.36L12.623,22.1l3.593,1.543,2-3.36,3.814-.866-.359-3.888,2.578-2.937M10.51,17.876,6.283,13.649l1.49-1.49,2.737,2.726,6.963-6.963,1.49,1.5Z" transform="translate(-1 -1.54)" fill="#00d4ff" />
                        </svg>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="262.29" height="43.773" viewBox="0 0 262.29 43.773">
                        <rect id="Rectangle_1306" data-name="Rectangle 1306" width="262.29" height="43.773" rx="6" fill="#00659d" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="186" height="27" viewBox="0 0 186 27">
                            <text id="FT_-_Home_-_2.5_Over" data-name="FT - Home - 2.5 Over" transform="translate(0 22)" fill="#e6e6e6" font-size="20" font-family="SegoeUI, Segoe UI"><tspan x="10" y="5">FT-Home-2.5 Over</tspan></text>
                        </svg>
                        <rect id="Rectangle_2376" data-name="Rectangle 2376" x="200" y="4" width="3" height="36" fill="#0b2447" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="460" height="27" viewBox="0 0 37 27">
                            <text id="_2.40" data-name="2.40" transform="translate(0 27)" fill="#e6e6e6" font-size="20" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">2.40</tspan></text>
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
export default VPRigthBarFavourite1;