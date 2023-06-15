import React from "react";
import { Container, Row, Col, Form, Button, Navbar } from "reactstrap";
import "../Css/Components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import header_logo from '../assets/portrait-of-happy-and-cheerful-handsome-adult-man-2022-02-07-02-02-56-utc.png'
const TopBar = () => {
    return (
            <Navbar fixed="top" expand="xs" className="header_style mt-4 position-relative">
                <Container style={{ marginRight: "0px" }}>
                    <Row noGutters className="position-relative p-0 w-100 align-items-center">
                        <Col className="d-lg-flex justify-content-end">
                            <Form inline className="d-flex align-items-center">
                                <Button type="submit" color="info" className="header_button" outline>Become a Editor</Button>
                                <svg id="brightness-up" xmlns="http://www.w3.org/2000/svg" width="43.954" height="43.954" viewBox="0 0 43.954 43.954" style={{ marginLeft: "10px" }}>
                                    <path id="Path_384" data-name="Path 384" d="M0,0H43.954V43.954H0Z" fill="none" />
                                    <path id="Path_385" data-name="Path 385" d="M14.494,14.494,9,14.494A5.494,5.494,0,1,0,14.494,9,5.494,5.494,0,0,0,9,14.494" transform="translate(7.483 7.483)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <path id="Path_386" data-name="Path 386" d="M12,6.663V3" transform="translate(9.977 2.494)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <path id="Path_387" data-name="Path 387" d="M17,8.164,19.564,5.6" transform="translate(14.134 4.656)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <path id="Path_388" data-name="Path 388" d="M19,12h3.663" transform="translate(15.797 9.977)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <path id="Path_389" data-name="Path 389" d="M17,17l2.564,2.564" transform="translate(14.134 14.134)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <path id="Path_390" data-name="Path 390" d="M12,19v3.663" transform="translate(9.977 15.797)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <path id="Path_391" data-name="Path 391" d="M8.164,17,5.6,19.564" transform="translate(4.656 14.134)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <path id="Path_392" data-name="Path 392" d="M7.663,12H4" transform="translate(3.326 9.977)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <path id="Path_393" data-name="Path 393" d="M8.164,8.164,5.6,5.6" transform="translate(4.656 4.656)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                </svg>
                                <svg id="bell-ringing" xmlns="http://www.w3.org/2000/svg" width="35.676" height="35.676" viewBox="0 0 35.676 35.676" style={{ marginLeft: "10px" }}>
                                    <path id="Path_102" data-name="Path 102" d="M0,0H35.676V35.676H0Z" fill="none" />
                                    <path id="Path_103" data-name="Path 103" d="M12.879,6A2.96,2.96,0,1,1,18.8,6a10.5,10.5,0,0,1,5.919,9v4.5a6,6,0,0,0,2.96,4.5H4a6,6,0,0,0,2.96-4.5V15a10.5,10.5,0,0,1,5.919-9" transform="translate(1.999 1.5)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <path id="Path_104" data-name="Path 104" d="M9,17v1.5a4.5,4.5,0,1,0,9,0V17" transform="translate(4.338 8.177)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <path id="Path_105" data-name="Path 105" d="M22.4,8.59A16.573,16.573,0,0,0,18.206,3" transform="translate(8.78 1.5)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <path id="Path_106" data-name="Path 106" d="M3,8.59A16.573,16.573,0,0,1,7.188,3" transform="translate(1.5 1.5)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                </svg>
                                <div className="header_dashboard_out" style={{ marginLeft: "10px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="97" height="27" viewBox="0 0 97 27">
                                        <text id="Dashboard" transform="translate(0 22)" fill="#e6e6e6" font-size="20" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Dashboard</tspan></text>
                                    </svg>
                                </div>
                                <img src={header_logo} alt="header_logo" className="header_logo" />
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
    );
};
export default TopBar;
