import React, { useState } from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Button, Col, Row } from "reactstrap";
import Modal from 'react-bootstrap/Modal';
const VPRightTopBar = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <div className="VP_Right_TopBar_out">
            <div className="d-flex display_VP">
                <div className="d-flex justify-content-start" style={{ paddingTop: "15px" }}>
                    <svg id="target-arrow" xmlns="http://www.w3.org/2000/svg" width="41.569" height="41.569" viewBox="0 0 41.569 41.569">
                        <path id="Path_48" data-name="Path 48" d="M0,0H41.569V41.569H0Z" fill="none" />
                        <path id="Path_49" data-name="Path 49" d="M12.732,12.732m-1.732,0A1.732,1.732,0,1,0,12.732,11,1.732,1.732,0,0,0,11,12.732" transform="translate(8.052 8.052)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_50" data-name="Path 50" d="M15.66,7a8.66,8.66,0,1,0,8.66,8.66" transform="translate(5.124 5.124)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_51" data-name="Path 51" d="M20.323,3.1A15.588,15.588,0,1,0,34.077,16.857" transform="translate(2.193 2.195)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_52" data-name="Path 52" d="M15,8.2v5.2h5.2l5.2-5.2H20.2V3Z" transform="translate(10.98 2.196)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_53" data-name="Path 53" d="M17.2,9,12,14.2" transform="translate(8.784 6.588)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                    <div className="VP_Right_TopBar_1" style={{ marginTop: "5px" }}>
                        My Comments
                    </div>
                    <svg id="user-check" xmlns="http://www.w3.org/2000/svg" width="44.063" height="44.063" viewBox="0 0 44.063 44.063" style={{ marginLeft: "30px" }}>
                        <path id="Path_146" data-name="Path 146" d="M0,0H44.063V44.063H0Z" fill="none" />
                        <path id="Path_147" data-name="Path 147" d="M8,10.344A7.344,7.344,0,1,0,15.344,3,7.344,7.344,0,0,0,8,10.344" transform="translate(6.688 2.508)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_148" data-name="Path 148" d="M6,26.016V22.344A7.344,7.344,0,0,1,13.344,15h7.344" transform="translate(5.016 12.54)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_149" data-name="Path 149" d="M15,20.672l3.672,3.672L26.016,17" transform="translate(12.54 14.212)" fill="none" stroke="#37ff80" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                    <div className="VP_Right_TopBar_2" style={{ marginTop: "5px" }}>
                        My Subscribers
                    </div>
                    <svg id="wallet" xmlns="http://www.w3.org/2000/svg" width="46.918" height="46.918" viewBox="0 0 46.918 46.918" style={{ marginLeft: "30px" }}>
                        <path id="Path_178" data-name="Path 178" d="M0,0H46.918V46.918H0Z" fill="none" />
                        <path id="Path_179" data-name="Path 179" d="M29.414,11.82V5.955A1.955,1.955,0,0,0,27.459,4H7.91a3.91,3.91,0,0,0,0,7.82H31.369a1.955,1.955,0,0,1,1.955,1.955v5.865m0,7.82v5.865a1.955,1.955,0,0,1-1.955,1.955H7.91A3.91,3.91,0,0,1,4,31.369V7.91" transform="translate(3.82 3.82)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_180" data-name="Path 180" d="M25.729,12v7.82H17.91a3.91,3.91,0,1,1,0-7.82h7.82" transform="translate(13.369 11.459)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                    <div className="VP_Right_TopBar_2" style={{ marginTop: "5px" }}>
                        Wallet
                    </div>
                    <svg id="star" xmlns="http://www.w3.org/2000/svg" width="40.052" height="40.052" viewBox="0 0 40.052 40.052" style={{ marginLeft: "30px" }}>
                        <path id="Path_272" data-name="Path 272" d="M0,0H40.052V40.052H0Z" fill="none" />
                        <path id="Path_273" data-name="Path 273" d="M18.265,27.421,8.224,32.659l1.918-11.094L2.007,13.709,13.233,12.1,18.254,2,23.275,12.1,34.5,13.709l-8.135,7.856,1.918,11.094Z" transform="translate(1.759 1.755)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                    <div className="VP_Right_TopBar_2" style={{ marginTop: "5px" }}>
                        My Favorites
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <Button type="submit" color="info" className="VP_Right_TopBar_Button1" onClick={handleShow} outline>Add Comment</Button>
                    <Modal show={show} onHide={handleClose} dialogClassName="modal_out">
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <Row style={{ marginTop: "-15px" }}>
                                <Col>
                                    <div className="Filter_Modal_Label">
                                        Category
                                    </div>
                                    <div className="crypto_dropdown">
                                        <select class="form-select form-select-lg mb-3" id="Select_out" aria-label=".form-select-lg example">
                                            {/* <option value="" hidden disabled selected>Select</option> */}
                                            <option value="0" className="Selected_item">All</option>
                                            <option selected className="Selected_item">Football</option>
                                            <option value="2" className="Selected_item">Basketball</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="Filter_Modal_Label">
                                        Country
                                    </div>
                                    <div className="crypto_dropdown">
                                        <select class="form-select form-select-lg mb-3" id="Select_out" aria-label=".form-select-lg example">
                                            {/* <option value="" hidden disabled selected>Select</option> */}
                                            <option value="0" className="Selected_item">All</option>
                                            <option selected className="Selected_item d-flex">
                                                {/* <img src={TurkeyLogo} alt="TurkeyLogo" /> */}
                                                Turkey
                                            </option>
                                            <option value="3" className="Selected_item">
                                                {/* <img src={UnitedKingdomLogo} alt="UnitedKingdomLogo" /> */}
                                                United Kingdom
                                            </option>
                                            <option value="4" className="Selected_item">
                                                <div className="d-flex">
                                                    {/* <img src={TurkeyLogo} alt="TurkeyLogo" /> */}
                                                    Turkey
                                                </div>
                                            </option>
                                            <option value="5" className="Selected_item">
                                                {/* <img src={UnitedKingdomLogo} alt="UnitedKingdomLogo" /> */}
                                                United Kingdom
                                            </option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: "-12px" }}>
                                <Col>
                                    <div className="Filter_Modal_Label">
                                        League
                                    </div>
                                    <div className="crypto_dropdown">
                                        <select class="form-select form-select-lg mb-3" id="Select_out" aria-label=".form-select-lg example">
                                            <option value="" hidden disabled selected>Select</option>
                                            <option value="0" className="Selected_item">All</option>
                                            <option value="1" className="Selected_item">Premier League</option>
                                            <option selected className="Selected_item">Super League</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="Filter_Modal_Label">
                                        Date
                                    </div>
                                    <div className="crypto_dropdown">
                                        <select class="form-select form-select-lg mb-3" id="Select_out" aria-label=".form-select-lg example">
                                            <option value="" hidden disabled selected>Select</option>
                                            <option value="0" className="Selected_item">25-12/27-12</option>
                                            <option selected className="Selected_item">22.05.2023</option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: "-12px" }}>
                                <div className="Filter_Modal_Label">
                                    Match Details
                                </div>
                                <div className="crypto_dropdown">
                                    <select class="form-select form-select-lg mb-3" id="Select_out" aria-label=".form-select-lg example">
                                        <option value="" hidden disabled selected>Select</option>
                                        <option value="0" className="Selected_item">All</option>
                                        <option value="1" className="Selected_item">Manchester United  - Arsenal</option>
                                        <option selected className="Selected_item">Galatasaray - Fenerbahçe</option>
                                    </select>
                                </div>
                            </Row>
                            <Row style={{ marginTop: "-12px" }}>
                                <Col>
                                    <div className="Filter_Modal_Label">
                                        Prediction Type
                                    </div>
                                    <div className="crypto_dropdown">
                                        <select class="form-select form-select-lg mb-3" id="Select_out" aria-label=".form-select-lg example">
                                            <option value="" hidden disabled selected>Select</option>
                                            <option value="0" className="Selected_item">All</option>
                                            <option value="1" className="Selected_item" style={{ color: "#FFA200" }}>Expert</option>
                                            <option selected className="Selected_item" style={{ color: "#FFA200" }}>Total Goal</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="Filter_Modal_Label">
                                        Prediction
                                    </div>
                                    <div className="Modal_field_out">
                                        <div className="d-flex" style={{ alignItems: "center" }}>
                                            <div className="Modal_field_Text_1">
                                                HT - FT 1
                                            </div>
                                            <div className="Modal_field_Text_2">
                                                1.40
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: "20px" }}>
                                <div className="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="40" viewBox="0 0 96 40">
                                        <rect id="Rectangle_852" data-name="Rectangle 852" width="96" height="40" rx="20" fill="#00659d" />
                                        <circle id="Ellipse_50" data-name="Ellipse 50" cx="20" cy="20" r="16" fill="#0d2a53" />
                                        <circle id="Ellipse_51" data-name="Ellipse 50" cx="20" cy="20" r="9" fill="#0B2447" />
                                    </svg>
                                    <div className="Modal_field_Text_3">
                                        Public Content
                                    </div>
                                </div>
                            </Row>
                            <Row style={{ marginTop: "17px" }}>
                                <div className="d-flex align-items-center display_VP">
                                    <div className="Modal_field_Text_4">
                                        Comment
                                    </div>
                                    <div className="Modal_field_Text_5">
                                        ( If illegal content is detected, the membership will be terminated. )
                                    </div>
                                </div>
                            </Row>
                            <input type="text" alt="search" className="Add_comment_out" />
                            <div className="Modal_field_Text_6">
                                Max. 250 characters
                            </div>
                            <div className="Modal_field_Text_7">
                                <svg id="checkbox" xmlns="http://www.w3.org/2000/svg" width="52.642" height="52.642" viewBox="0 0 52.642 52.642">
                                    <path id="Path_227" data-name="Path 227" d="M0,0H52.642V52.642H0Z" fill="none" />
                                    <path id="Path_228" data-name="Path 228" d="M9,16.967l6.58,6.58L33.127,6" transform="translate(10.741 7.16)" fill="none" stroke="#37ff80" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                    <path id="Path_229" data-name="Path 229" d="M39.094,21.547v13.16a4.387,4.387,0,0,1-4.387,4.387H8.387A4.387,4.387,0,0,1,4,34.708V8.387A4.387,4.387,0,0,1,8.387,4H28.127" transform="translate(4.774 4.774)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                </svg>
                                <div className="Modal_field_Text_8">
                                    I have read and agree to the <span className="Modal_field_Text_9">Terms of Use</span>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer style={{ display: "flex", justifyContent: "center", marginTop: "-10px" }}>
                            <Button type="submit" color="info" className="modal_Footer_Button" outline>Publish</Button>
                            <div className="Modal_field_Text_10">
                                "The published predictions can be edited within 5 minutes."
                            </div>
                        </Modal.Footer>
                    </Modal>
                    <Button type="submit" color="info" className="VP_Right_TopBar_Button2" outline>Promote Me</Button>
                </div>
            </div>
        </div>
    );
};
export default VPRightTopBar;