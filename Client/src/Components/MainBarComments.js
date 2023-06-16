import React, { useState } from "react";
import "../Css/Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
    Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col
} from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import MainMiddleBar from "./MainMiddleBar";
import TurkeyLogo from "../assets/Roundel_flag_of_Turkey.svg.png";
import UnitedKingdomLogo from "../assets/Flag_of_the_United_Kingdom_(3-5).svg.png";
const MainBarComments = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [publicChecked, setPublicChecked] = useState(false);
    const [SubscriberChecked, setSubscriberChecked] = useState(false);
    const [FinishedChecked, setFinishedChecked] = useState(false);
    const [StartedChecked, setStartedChecked] = useState(false);
    const [WinningChecked, setWinningChecked] = useState(false);
    const [LoseChecked, setLoseChecked] = useState(false);
    console.log(publicChecked, SubscriberChecked, FinishedChecked, StartedChecked, WinningChecked, LoseChecked)
    return (
        <div className="MainBar_Comment_out">
            <div className="d-flex MainBar_Edit_Search_Comments">
                <input type="text" alt="search" className="searchBar_Style" placeholder="Correo electrónico" />
                <div className="d-flex">
                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle className="MainTopHeader_button" caret>
                            All
                        </DropdownToggle>
                        <DropdownMenu className="Dropdown_style">
                            <DropdownItem className="Dropdown_item_color">All</DropdownItem>
                            <DropdownItem className="Dropdown_item_color">Football</DropdownItem>
                            <DropdownItem className="Dropdown_item_color">Basketball</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    <Button type="submit" color="info" className="MainTopHeader_button_Comment" onClick={handleShow} outline>Filter</Button>
                    <Modal show={show} onHide={handleClose} dialogClassName="modal_out">
                        <Modal.Header closeButton>

                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col>
                                    <div className="Filter_Modal_Label">
                                        Category
                                    </div>
                                    <div className="crypto_dropdown">
                                        <select class="form-select form-select-lg mb-3" id="Select_out" aria-label=".form-select-lg example">
                                            <option value="" hidden disabled selected>Select</option>
                                            <option value="0" className="Selected_item">All</option>
                                            <option value="1" className="Selected_item">Football</option>
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
                                            <option value="" hidden disabled selected>Select</option>
                                            <option value="0" className="Selected_item">All</option>
                                            <option value="1" className="Selected_item d-flex">
                                                <svg id="search" xmlns="http://www.w3.org/2000/svg" width="32.59" height="32.59" viewBox="0 0 32.59 32.59">
                                                    <path id="Path_107" data-name="Path 107" d="M0,0H32.59V32.59H0Z" fill="none" />
                                                    <path id="Path_108" data-name="Path 108" d="M12.472,12.472,3,12.472A9.472,9.472,0,1,0,12.472,3,9.472,9.472,0,0,0,3,12.472" transform="translate(1.059 1.059)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" />
                                                    <path id="Path_109" data-name="Path 109" d="M23.119,23.119,15,15" transform="translate(5.411 5.411)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" />
                                                </svg>
                                            </option>
                                            <option value="2" className="Selected_item d-flex">
                                                <img src={TurkeyLogo} alt="TurkeyLogo" />
                                                Turkey
                                            </option>
                                            <option value="3" className="Selected_item">
                                                <img src={UnitedKingdomLogo} alt="UnitedKingdomLogo" />
                                                United Kingdom
                                            </option>
                                            <option value="4" className="Selected_item">
                                                <div className="d-flex">
                                                    <img src={TurkeyLogo} alt="TurkeyLogo" />
                                                    Turkey
                                                </div>
                                            </option>
                                            <option value="5" className="Selected_item">
                                                <img src={UnitedKingdomLogo} alt="UnitedKingdomLogo" />
                                                United Kingdom
                                            </option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: "19px" }}>
                                <Col>
                                    <div className="Filter_Modal_Label">
                                        League
                                    </div>
                                    <div className="crypto_dropdown">
                                        <select class="form-select form-select-lg mb-3" id="Select_out" aria-label=".form-select-lg example">
                                            <option value="" hidden disabled selected>Select</option>
                                            <option value="0" className="Selected_item">All</option>
                                            <option value="1" className="Selected_item">Premier League</option>
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
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: "19px" }}>
                                <div className="Filter_Modal_Label">
                                    Match Details
                                </div>
                                <div className="crypto_dropdown">
                                    <select class="form-select form-select-lg mb-3" id="Select_out" aria-label=".form-select-lg example">
                                        <option value="" hidden disabled selected>Select</option>
                                        <option value="0" className="Selected_item">All</option>
                                        <option value="1" className="Selected_item">Manchester United  - Arsenal</option>
                                    </select>
                                </div>
                            </Row>
                            <Row style={{ marginTop: "19px" }}>
                                <Col>
                                    <div className="Filter_Modal_Label">
                                        Level
                                    </div>
                                    <div className="crypto_dropdown">
                                        <select class="form-select form-select-lg mb-3" id="Select_out" aria-label=".form-select-lg example">
                                            <option value="" hidden disabled selected>Select</option>
                                            <option value="0" className="Selected_item">All</option>
                                            <option value="1" className="Selected_item" style={{ color: "#FFA200" }}>Expert</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="Filter_Modal_Label">
                                        Prediction Type
                                    </div>
                                    <div className="crypto_dropdown">
                                        <select class="form-select form-select-lg mb-3" id="Select_out" aria-label=".form-select-lg example">
                                            <option value="" hidden disabled selected>Select</option>
                                            <option value="0" className="Selected_item">$ USD</option>
                                            <option value="1" className="Selected_item">₹ INR</option>
                                            <option value="2" className="Selected_item"> د.إ AED</option>
                                            <option value="3" className="Selected_item">A$ AUD</option>
                                            <option value="4" className="Selected_item">S$ SGD</option>
                                            <option value="5" className="Selected_item">C$ CAD</option>
                                            <option value="6" className="Selected_item">RM MYR</option>
                                            <option value="7" className="Selected_item">€ EUR</option>
                                            <option value="8" className="Selected_item">₤ GBP</option>
                                            <option value="9" className="Selected_item">ر.ق QAR </option>
                                            <option value="10" className="Selected_item"> ر.س SAR</option>
                                            <option value="11" className="Selected_item">HK$ HKD</option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                                <Row style={{ marginTop: "30px" }}>
                                    <Col className="d-flex justify-content-start">
                                        <div className="d-flex" onClick={() => { setPublicChecked(!publicChecked) }}>
                                            {!publicChecked ?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37">
                                                    <circle id="Ellipse_61" data-name="Ellipse 61" cx="18.5" cy="18.5" r="18.5" fill="#e6e6e6" />
                                                    <circle id="Ellipse_64" data-name="Ellipse 64" cx="18.5" cy="18.5" r="15" fill="#0d2a53" />
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37">
                                                    <circle id="Ellipse_61" data-name="Ellipse 61" cx="18.5" cy="18.5" r="18.5" fill="#4dd5ff" />
                                                    <circle id="Ellipse_64" data-name="Ellipse 64" cx="18.5" cy="18.5" r="15" fill="#0d2a53" />
                                                </svg>
                                            }
                                            <div className="Filter_Modal_Label" style={{ marginLeft: "5px" }}>
                                                Only Public
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="d-flex justify-content-end" onClick={() => { setSubscriberChecked(!SubscriberChecked) }}>
                                        <div className="d-flex">
                                            <div className="Filter_Modal_Label">
                                                Only Subscriber
                                            </div>
                                            {!SubscriberChecked ?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" style={{ marginLeft: "5px" }}>
                                                    <circle id="Ellipse_61" data-name="Ellipse 61" cx="18.5" cy="18.5" r="18.5" fill="#e6e6e6" />
                                                    <circle id="Ellipse_64" data-name="Ellipse 64" cx="18.5" cy="18.5" r="15" fill="#0d2a53" />
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" style={{ marginLeft: "5px" }}>
                                                    <circle id="Ellipse_61" data-name="Ellipse 61" cx="18.5" cy="18.5" r="18.5" fill="#D2DB08" />
                                                    <circle id="Ellipse_64" data-name="Ellipse 64" cx="18.5" cy="18.5" r="15" fill="#0d2a53" />
                                                </svg>
                                            }
                                        </div>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: "20px" }}>
                                    <Col className="d-flex justify-content-start" onClick={() => { setFinishedChecked(!FinishedChecked) }}>
                                        <div className="d-flex">
                                            {!FinishedChecked ?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37">
                                                    <circle id="Ellipse_61" data-name="Ellipse 61" cx="18.5" cy="18.5" r="18.5" fill="#e6e6e6" />
                                                    <circle id="Ellipse_64" data-name="Ellipse 64" cx="18.5" cy="18.5" r="15" fill="#0d2a53" />
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37">
                                                    <circle id="Ellipse_61" data-name="Ellipse 61" cx="18.5" cy="18.5" r="18.5" fill="#FFEF88" />
                                                    <circle id="Ellipse_64" data-name="Ellipse 64" cx="18.5" cy="18.5" r="15" fill="#0d2a53" />
                                                </svg>
                                            }
                                            <div className="Filter_Modal_Label" style={{ marginLeft: "5px" }}>
                                                Finished
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="d-flex justify-content-end" onClick={() => { setStartedChecked(!StartedChecked) }}>
                                        <div className="d-flex">
                                            <div className="Filter_Modal_Label">
                                                Not Started
                                            </div>
                                            {!StartedChecked ?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" style={{ marginLeft: "5px" }}>
                                                    <circle id="Ellipse_61" data-name="Ellipse 61" cx="18.5" cy="18.5" r="18.5" fill="#e6e6e6" />
                                                    <circle id="Ellipse_64" data-name="Ellipse 64" cx="18.5" cy="18.5" r="15" fill="#0d2a53" />
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" style={{ marginLeft: "5px" }}>
                                                    <circle id="Ellipse_61" data-name="Ellipse 61" cx="18.5" cy="18.5" r="18.5" fill="#FFDD00" />
                                                    <circle id="Ellipse_64" data-name="Ellipse 64" cx="18.5" cy="18.5" r="15" fill="#0d2a53" />
                                                </svg>
                                            }
                                        </div>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: "20px" }}>
                                    <Col className="d-flex justify-content-start" onClick={() => { setWinningChecked(!WinningChecked) }}>
                                        <div className="d-flex">
                                            {!WinningChecked ?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37">
                                                    <circle id="Ellipse_61" data-name="Ellipse 61" cx="18.5" cy="18.5" r="18.5" fill="#e6e6e6" />
                                                    <circle id="Ellipse_64" data-name="Ellipse 64" cx="18.5" cy="18.5" r="15" fill="#0d2a53" />
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37">
                                                    <circle id="Ellipse_61" data-name="Ellipse 61" cx="18.5" cy="18.5" r="18.5" fill="#5BDEAA" />
                                                    <circle id="Ellipse_64" data-name="Ellipse 64" cx="18.5" cy="18.5" r="15" fill="#0d2a53" />
                                                </svg>
                                            }
                                            <div className="Filter_Modal_Label" style={{ marginLeft: "5px" }}>
                                                Winning
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="d-flex justify-content-end" onClick={() => { setLoseChecked(!LoseChecked) }}>
                                        <div className="d-flex">
                                            <div className="Filter_Modal_Label">
                                                Lose
                                            </div>
                                            {!LoseChecked ?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" style={{ marginLeft: "5px" }}>
                                                    <circle id="Ellipse_61" data-name="Ellipse 61" cx="18.5" cy="18.5" r="18.5" fill="#e6e6e6" />
                                                    <circle id="Ellipse_64" data-name="Ellipse 64" cx="18.5" cy="18.5" r="15" fill="#0d2a53" />
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" style={{ marginLeft: "5px" }}>
                                                    <circle id="Ellipse_61" data-name="Ellipse 61" cx="18.5" cy="18.5" r="18.5" fill="#FF5757" />
                                                    <circle id="Ellipse_64" data-name="Ellipse 64" cx="18.5" cy="18.5" r="15" fill="#0d2a53" />
                                                </svg>
                                            }
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Modal.Body>
                        <Modal.Footer style={{ display: "flex", justifyContent: "center", marginTop: "-10px" }}>
                            <Button type="submit" color="info" className="modal_Footer_Button" outline>Show</Button>
                        </Modal.Footer>
                    </Modal>
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" style={{ marginLeft: "20px" }} >
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="37" viewBox="0 0 100 27">
                        <text id="Only_Public" data-name="Only Public" transform="translate(0 22)" fill="#e6e6e6" font-size="20" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Only Public</tspan></text>
                    </svg>
                    <div className="position-relative" style={{ marginLeft: "10px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="44" viewBox="0 0 34 34">
                            <circle id="Ellipse_135" data-name="Ellipse 135" cx="17" cy="17" r="17" fill="#e6e6e6" />
                            <circle id="Ellipse_137" data-name="Ellipse 137" cx="17" cy="17" r="14" fill="#0b2447" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="MainBarCommentMiddle_out">
                <MainMiddleBar />
            </div>
            <div className="MainBarCommentMiddle_out">
                <MainMiddleBar />
            </div>

        </div>


    );
};
export default MainBarComments;
