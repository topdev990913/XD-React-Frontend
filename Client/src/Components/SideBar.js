import React, { useState } from "react";
import { Row } from "reactstrap";
import "../Css/Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const SideBar = () => {
    const [checkedMainOption, setCheckedMainOption] = useState(1)
    console.log("checkedMainOption", checkedMainOption)
    return (
        <div className="SideBar_out">
            <Row>
                {checkedMainOption === 1 ?
                    <svg id="apps" xmlns="http://www.w3.org/2000/svg" width="40.876" height="40.876" viewBox="0 0 40.876 40.876" className="MainOption" onClick={() => { setCheckedMainOption(1) }}>
                        <path id="Path_38" data-name="Path 38" d="M0,0H40.876V40.876H0Z" fill="none" />
                        <path id="Path_39" data-name="Path 39" d="M4,4,4,5.7A1.7,1.7,0,0,1,5.7,4h6.813a1.7,1.7,0,0,1,1.7,1.7v6.813a1.7,1.7,0,0,1-1.7,1.7H5.7a1.7,1.7,0,0,1-1.7-1.7Z" transform="translate(2.813 2.813)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_40" data-name="Path 40" d="M4,14m0,1.7A1.7,1.7,0,0,1,5.7,14h6.813a1.7,1.7,0,0,1,1.7,1.7v6.813a1.7,1.7,0,0,1-1.7,1.7H5.7a1.7,1.7,0,0,1-1.7-1.7Z" transform="translate(2.813 9.844)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_41" data-name="Path 41" d="M14,14m0,1.7A1.7,1.7,0,0,1,15.7,14h6.813a1.7,1.7,0,0,1,1.7,1.7v6.813a1.7,1.7,0,0,1-1.7,1.7H15.7a1.7,1.7,0,0,1-1.7-1.7Z" transform="translate(9.844 9.844)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_42" data-name="Path 42" d="M14,7H24.219" transform="translate(9.844 4.922)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_43" data-name="Path 43" d="M17,4V14.219" transform="translate(11.954 2.813)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                    :
                    <svg id="apps" xmlns="http://www.w3.org/2000/svg" width="40.876" height="40.876" viewBox="0 0 40.876 40.876" className="MainOption" onClick={() => { setCheckedMainOption(1) }}>
                        <path id="Path_38" data-name="Path 38" d="M0,0H40.876V40.876H0Z" fill="none" />
                        <path id="Path_39" data-name="Path 39" d="M4,4,4,5.7A1.7,1.7,0,0,1,5.7,4h6.813a1.7,1.7,0,0,1,1.7,1.7v6.813a1.7,1.7,0,0,1-1.7,1.7H5.7a1.7,1.7,0,0,1-1.7-1.7Z" transform="translate(2.813 2.813)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_40" data-name="Path 40" d="M4,14m0,1.7A1.7,1.7,0,0,1,5.7,14h6.813a1.7,1.7,0,0,1,1.7,1.7v6.813a1.7,1.7,0,0,1-1.7,1.7H5.7a1.7,1.7,0,0,1-1.7-1.7Z" transform="translate(2.813 9.844)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_41" data-name="Path 41" d="M14,14m0,1.7A1.7,1.7,0,0,1,15.7,14h6.813a1.7,1.7,0,0,1,1.7,1.7v6.813a1.7,1.7,0,0,1-1.7,1.7H15.7a1.7,1.7,0,0,1-1.7-1.7Z" transform="translate(9.844 9.844)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_42" data-name="Path 42" d="M14,7H24.219" transform="translate(9.844 4.922)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_43" data-name="Path 43" d="M17,4V14.219" transform="translate(11.954 2.813)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                }
            </Row>
            <Row>
                {checkedMainOption === 2 ?
                    <svg id="user-bolt" xmlns="http://www.w3.org/2000/svg" width="43.011" height="43.011" viewBox="0 0 43.011 43.011" style={{ marginTop: "35px" }} className="MainOption" onClick={() => { setCheckedMainOption(2) }}>
                        <path id="Path_44" data-name="Path 44" d="M0,0H43.011V43.011H0Z" fill="none" />
                        <path id="Path_45" data-name="Path 45" d="M8,10.169A7.169,7.169,0,1,0,15.169,3,7.169,7.169,0,0,0,8,10.169" transform="translate(6.337 2.376)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_46" data-name="Path 46" d="M6,25.753V22.169A7.169,7.169,0,0,1,13.169,15h7.169a7.2,7.2,0,0,1,1.4.136" transform="translate(4.753 11.882)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_47" data-name="Path 47" d="M20.584,16,17,21.376h7.169l-3.584,5.376" transform="translate(13.466 12.674)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                    :
                    <svg id="user-bolt" xmlns="http://www.w3.org/2000/svg" width="43.011" height="43.011" viewBox="0 0 43.011 43.011" style={{ marginTop: "35px" }} className="MainOption" onClick={() => { setCheckedMainOption(2) }}>
                        <path id="Path_44" data-name="Path 44" d="M0,0H43.011V43.011H0Z" fill="none" />
                        <path id="Path_45" data-name="Path 45" d="M8,10.169A7.169,7.169,0,1,0,15.169,3,7.169,7.169,0,0,0,8,10.169" transform="translate(6.337 2.376)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_46" data-name="Path 46" d="M6,25.753V22.169A7.169,7.169,0,0,1,13.169,15h7.169a7.2,7.2,0,0,1,1.4.136" transform="translate(4.753 11.882)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_47" data-name="Path 47" d="M20.584,16,17,21.376h7.169l-3.584,5.376" transform="translate(13.466 12.674)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                }
            </Row>
            <Row>
                {checkedMainOption === 3 ?
                    <svg id="target-arrow" xmlns="http://www.w3.org/2000/svg" width="40.847" height="40.847" viewBox="0 0 40.847 40.847" style={{ marginTop: "35px" }} className="MainOption" onClick={() => { setCheckedMainOption(3) }}>
                        <path id="Path_48" data-name="Path 48" d="M0,0H40.847V40.847H0Z" fill="none" />
                        <path id="Path_49" data-name="Path 49" d="M12.7,12.7m-1.7,0A1.7,1.7,0,1,0,12.7,11,1.7,1.7,0,0,0,11,12.7" transform="translate(7.722 7.722)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_50" data-name="Path 50" d="M15.51,7a8.51,8.51,0,1,0,8.51,8.51" transform="translate(4.914 4.914)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_51" data-name="Path 51" d="M20.022,3.095A15.318,15.318,0,1,0,33.537,16.617" transform="translate(2.103 2.105)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_52" data-name="Path 52" d="M15,8.106v5.106h5.106l5.106-5.106H20.106V3Z" transform="translate(10.529 2.106)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_53" data-name="Path 53" d="M17.106,9,12,14.106" transform="translate(8.423 6.318)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                    :
                    <svg id="target-arrow" xmlns="http://www.w3.org/2000/svg" width="40.847" height="40.847" viewBox="0 0 40.847 40.847" style={{ marginTop: "35px" }} className="MainOption" onClick={() => { setCheckedMainOption(3) }}>
                        <path id="Path_48" data-name="Path 48" d="M0,0H40.847V40.847H0Z" fill="none" />
                        <path id="Path_49" data-name="Path 49" d="M12.7,12.7m-1.7,0A1.7,1.7,0,1,0,12.7,11,1.7,1.7,0,0,0,11,12.7" transform="translate(7.722 7.722)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_50" data-name="Path 50" d="M15.51,7a8.51,8.51,0,1,0,8.51,8.51" transform="translate(4.914 4.914)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_51" data-name="Path 51" d="M20.022,3.095A15.318,15.318,0,1,0,33.537,16.617" transform="translate(2.103 2.105)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_52" data-name="Path 52" d="M15,8.106v5.106h5.106l5.106-5.106H20.106V3Z" transform="translate(10.529 2.106)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_53" data-name="Path 53" d="M17.106,9,12,14.106" transform="translate(8.423 6.318)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                }
            </Row>
            <Row>
                <svg id="star" xmlns="http://www.w3.org/2000/svg" width="40.51" height="40.51" viewBox="0 0 40.51 40.51" style={{ marginTop: "35px" }} className="MainOption" onClick={() => { setCheckedMainOption(4) }}>
                    <path id="Path_272" data-name="Path 272" d="M0,0H40.51V40.51H0Z" fill="none" />
                    <path id="Path_273" data-name="Path 273" d="M18.532,27.878,8.326,33.21l1.95-11.293-8.268-8,11.41-1.643L18.52,2l5.1,10.275,11.41,1.643-8.268,8,1.95,11.293Z" transform="translate(1.722 1.717)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
            </Row>
            <Row>
                <svg id="logout" xmlns="http://www.w3.org/2000/svg" width="40.51" height="40.51" viewBox="0 0 40.51 40.51" style={{ marginTop: "35px" }} className="MainOption" onClick={() => { setCheckedMainOption(5) }}>
                    <path id="Path_87" data-name="Path 87" d="M0,0H40.51V40.51H0Z" fill="none" />
                    <path id="Path_88" data-name="Path 88" d="M22.237,10.63V7.315A3.41,3.41,0,0,0,18.74,4H6.5A3.41,3.41,0,0,0,3,7.315V27.2a3.41,3.41,0,0,0,3.5,3.315H18.74a3.41,3.41,0,0,0,3.5-3.315V23.889" transform="translate(2.247 2.995)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    <path id="Path_89" data-name="Path 89" d="M7,14.247H31.484L26.237,9m0,10.493,5.247-5.247" transform="translate(3.78 6.008)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
            </Row>
        </div>

    );
};
export default SideBar;
