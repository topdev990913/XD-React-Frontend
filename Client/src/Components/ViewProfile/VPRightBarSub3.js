import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HighlightLogo from '../../assets/lifebuoy.png';
import { Button } from "reactstrap";
const VPRigthBarSub3 = () => {
    return (
        <div className="VPRigthBarSub3_out">
            <div className="VPRigthBarSub2_1">
                Support
            </div>
            <div className="VPRigthBarSub3_1">
                <img src={HighlightLogo} alt="HighlightLogo" className="HighlightLogo" />
                <div className="VPRigthBarSub3_2">
                    Do you need help?
                </div>
                <Button type="button" className="Support_Button" inline>Create Support Ticket</Button>
            </div>
            <div className="VPRigthBarSub3_3">
                Support Requests
            </div>
            <div className="VPRigthBarSub3_4">
                <div className="d-flex" style={{ alignItems: "center" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="27" viewBox="0 0 9 27" style={{ marginLeft: "10px" }}>
                        <rect id="Rectangle_937" data-name="Rectangle 937" width="9" height="27" fill="#f8ff61" />
                    </svg>
                    <div className="VPRigthBarSub3_5">
                        Financial
                    </div>
                    <div className="VPRigthBarSub3_6">
                        11.03.2022-16:36
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="102.067" height="44" viewBox="0 0 102.067 44" style={{ position: "absolute", right: "30px" }}>
                    <g id="Path_323" data-name="Path 323" transform="translate(-8)" fill="#0b2447">
                        <path d="M 100.3462295532227 42 L 10.00000095367432 42 L 10.00000095367432 2 L 100.3462295532227 2 C 102.4802398681641 2 104.4699554443359 2.670300006866455 105.948860168457 3.887414216995239 C 107.3146896362305 5.011485576629639 108.0668869018555 6.472028732299805 108.0668869018555 8 L 108.0668869018555 36 C 108.0668869018555 37.52797317504883 107.3146896362305 38.9885139465332 105.948860168457 40.11258697509766 C 104.4699554443359 41.3297004699707 102.4802398681641 42 100.3462295532227 42 Z" stroke="none" />
                        <path d="M 11.99999237060547 4 L 11.99999237060547 40 L 100.3462295532227 40 C 101.9935455322266 40 103.572395324707 39.47816467285156 104.6779251098633 38.56831741333008 C 105.196662902832 38.14141845703125 106.0668792724609 37.24006652832031 106.0668792724609 36 L 106.0668792724609 8 C 106.0668792724609 6.759933471679688 105.196662902832 5.85858154296875 104.6779251098633 5.431682586669922 C 103.572395324707 4.521831512451172 101.9935455322266 4 100.3462295532227 4 L 11.99999237060547 4 M 7.999992370605469 0 L 100.3462295532227 0 C 105.7148132324219 0 110.0668792724609 3.581718444824219 110.0668792724609 8 L 110.0668792724609 36 C 110.0668792724609 40.41828155517578 105.7148132324219 44 100.3462295532227 44 L 7.999992370605469 44 L 7.999992370605469 0 Z" stroke="none" fill="#0d2a53" />
                    </g>
                </svg>
                <div className="VPRigthBarSub3_7">
                    Waiting
                </div>
            </div>
            <div className="VPRigthBarSub3_4">
                <div className="d-flex" style={{ alignItems: "center" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="27" viewBox="0 0 9 27" style={{ marginLeft: "10px" }}>
                        <rect id="Rectangle_938" data-name="Rectangle 938" width="9" height="27" fill="#37ff80" />
                    </svg>
                    <div className="VPRigthBarSub3_5">
                        Technical
                    </div>
                    <div className="VPRigthBarSub3_6" style={{ marginLeft: "89.3px" }}>
                        11.03.2022-16:36
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="102.067" height="44" viewBox="0 0 102.067 44" style={{ position: "absolute", right: "30px" }}>
                    <g id="Path_323" data-name="Path 323" transform="translate(-8)" fill="#0b2447">
                        <path d="M 100.3462295532227 42 L 10.00000095367432 42 L 10.00000095367432 2 L 100.3462295532227 2 C 102.4802398681641 2 104.4699554443359 2.670300006866455 105.948860168457 3.887414216995239 C 107.3146896362305 5.011485576629639 108.0668869018555 6.472028732299805 108.0668869018555 8 L 108.0668869018555 36 C 108.0668869018555 37.52797317504883 107.3146896362305 38.9885139465332 105.948860168457 40.11258697509766 C 104.4699554443359 41.3297004699707 102.4802398681641 42 100.3462295532227 42 Z" stroke="none" />
                        <path d="M 11.99999237060547 4 L 11.99999237060547 40 L 100.3462295532227 40 C 101.9935455322266 40 103.572395324707 39.47816467285156 104.6779251098633 38.56831741333008 C 105.196662902832 38.14141845703125 106.0668792724609 37.24006652832031 106.0668792724609 36 L 106.0668792724609 8 C 106.0668792724609 6.759933471679688 105.196662902832 5.85858154296875 104.6779251098633 5.431682586669922 C 103.572395324707 4.521831512451172 101.9935455322266 4 100.3462295532227 4 L 11.99999237060547 4 M 7.999992370605469 0 L 100.3462295532227 0 C 105.7148132324219 0 110.0668792724609 3.581718444824219 110.0668792724609 8 L 110.0668792724609 36 C 110.0668792724609 40.41828155517578 105.7148132324219 44 100.3462295532227 44 L 7.999992370605469 44 L 7.999992370605469 0 Z" stroke="none" fill="#0d2a53" />
                    </g>
                </svg>
                <div className="VPRigthBarSub3_7" style={{marginLeft: "349px"}}>
                    Closed
                </div>
            </div>
            <div className="VPRigthBarSub3_4">
                <div className="d-flex" style={{ alignItems: "center" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="27" viewBox="0 0 9 27" style={{ marginLeft: "10px" }}>
                        <rect id="Rectangle_939" data-name="Rectangle 939" width="9" height="27" fill="#4dd5ff" />
                    </svg>

                    <div className="VPRigthBarSub3_5">
                        Financial
                    </div>
                    <div className="VPRigthBarSub3_6">
                        11.03.2022-16:36
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="102.067" height="44" viewBox="0 0 102.067 44" style={{ position: "absolute", right: "30px" }}>
                    <g id="Path_323" data-name="Path 323" transform="translate(-8)" fill="#0b2447">
                        <path d="M 100.3462295532227 42 L 10.00000095367432 42 L 10.00000095367432 2 L 100.3462295532227 2 C 102.4802398681641 2 104.4699554443359 2.670300006866455 105.948860168457 3.887414216995239 C 107.3146896362305 5.011485576629639 108.0668869018555 6.472028732299805 108.0668869018555 8 L 108.0668869018555 36 C 108.0668869018555 37.52797317504883 107.3146896362305 38.9885139465332 105.948860168457 40.11258697509766 C 104.4699554443359 41.3297004699707 102.4802398681641 42 100.3462295532227 42 Z" stroke="none" />
                        <path d="M 11.99999237060547 4 L 11.99999237060547 40 L 100.3462295532227 40 C 101.9935455322266 40 103.572395324707 39.47816467285156 104.6779251098633 38.56831741333008 C 105.196662902832 38.14141845703125 106.0668792724609 37.24006652832031 106.0668792724609 36 L 106.0668792724609 8 C 106.0668792724609 6.759933471679688 105.196662902832 5.85858154296875 104.6779251098633 5.431682586669922 C 103.572395324707 4.521831512451172 101.9935455322266 4 100.3462295532227 4 L 11.99999237060547 4 M 7.999992370605469 0 L 100.3462295532227 0 C 105.7148132324219 0 110.0668792724609 3.581718444824219 110.0668792724609 8 L 110.0668792724609 36 C 110.0668792724609 40.41828155517578 105.7148132324219 44 100.3462295532227 44 L 7.999992370605469 44 L 7.999992370605469 0 Z" stroke="none" fill="#0d2a53" />
                    </g>
                </svg>
                <div className="VPRigthBarSub3_7" style={{marginLeft: "342px"}}>
                    Progress
                </div>
            </div>
        </div>
    );
};
export default VPRigthBarSub3;