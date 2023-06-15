import React from "react";
import { Button } from "reactstrap";
import "../Css/Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const MainTopBar = () => {
    return (
        <div className="MainTopBar_out">
            <div style={{ width: "50%" }}>
                <div className="d-flex justify-content-start align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="83" height="33" viewBox="0 0 83 33">
                        <text id="For_You" data-name="For You" transform="translate(0 27)" fill="#d2db08" font-size="25" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">For You</tspan></text>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="190" height="33" viewBox="0 0 190 33" style={{ marginLeft: "20px" }}>
                        <text id="My_Subscriptions" data-name="My Subscriptions" transform="translate(0 27)" fill="#e6e6e6" font-size="25" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">My Subscriptions</tspan></text>
                    </svg>
                </div>
            </div>
            <div style={{ width: "50%" }}>
                <div className="d-flex justify-content-end align-items-center">
                    <Button type="submit" color="info" className="MainTopHeader_button" outline>All</Button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" style={{ marginLeft: "20px" }}>
                        <g id="world-check" transform="translate(0)">
                            <path id="Path_554" data-name="Path 554" d="M0,0H42V42H0Z" transform="translate(0)" fill="none" />
                            <path id="Path_555" data-name="Path 555" d="M34.164,20.348A15.629,15.629,0,1,0,17.736,34.232" transform="translate(2.371 2.371)" fill="none" stroke="#4dd5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <path id="Path_556" data-name="Path 556" d="M3.6,9H32.71" transform="translate(2.845 6.75)" fill="none" stroke="#4dd5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <path id="Path_557" data-name="Path 557" d="M3.6,15H28.485" transform="translate(2.845 11.25)" fill="none" stroke="#4dd5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <path id="Path_558" data-name="Path 558" d="M13.464,3a28.916,28.916,0,0,0,0,31.115" transform="translate(6.648 2.371)" fill="none" stroke="#4dd5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <path id="Path_559" data-name="Path 559" d="M12.5,3a28.88,28.88,0,0,1,4.137,20.879" transform="translate(9.314 2.371)" fill="none" stroke="#4dd5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <path id="Path_560" data-name="Path 560" d="M15,20.581l3.581,3.581L25.742,17" transform="translate(10.887 12.468)" fill="none" stroke="#4dd5ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="27" viewBox="0 0 100 27">
                        <text id="Only_Public" data-name="Only Public" transform="translate(0 22)" fill="#e6e6e6" font-size="20" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Only Public</tspan></text>
                    </svg>
                    <div className="position-relative" style={{marginLeft: "10px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
                            <circle id="Ellipse_135" data-name="Ellipse 135" cx="17" cy="17" r="17" fill="#e6e6e6" />
                            <circle id="Ellipse_137" data-name="Ellipse 137" cx="17" cy="17" r="14" fill="#0b2447" />
                        </svg>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="33.5" height="33.5" viewBox="0 0 28 28">
                            <circle id="Ellipse_137" data-name="Ellipse 137" cx="14" cy="14" r="14" fill="#0b2447" />
                        </svg> */}
                    </div>
                </div>
            </div>
        </div>


    );
};
export default MainTopBar;
