import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const VPRightTopBarStar = ({ checkedCommentStar, setcheckedCommentStar }) => {
    console.log("checkedCommentStar", checkedCommentStar)
    return (
        <div className="VP_Right_TopBar_out">
            <div className="d-flex justify-content-start" style={{ paddingTop: "15px" }}>
                {checkedCommentStar === 1 ?
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45.063" height="44.063" viewBox="0 0 45.063 44.063" onClick={() => { setcheckedCommentStar(1) }}>
                            <g id="user-check" transform="translate(1)">
                                <path id="Path_146" data-name="Path 146" d="M0,0H44.063V44.063H0Z" fill="none" />
                                <path id="Path_147" data-name="Path 147" d="M8,10.344A7.344,7.344,0,1,0,15.344,3,7.344,7.344,0,0,0,8,10.344" transform="translate(-4.328 2.508)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                <path id="Path_148" data-name="Path 148" d="M6,26.016V22.344A7.344,7.344,0,0,1,13.344,15h7.344" transform="translate(-6 12.54)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                <path id="Path_149" data-name="Path 149" d="M15,20.672l3.672,3.672L26.016,17" transform="translate(1.524 14.212)" fill="none" stroke="#37ff80" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            </g>
                        </svg>
                        <div className="VP_Right_TopBar_1" style={{ marginTop: "5px" }} onClick={() => { setcheckedCommentStar(1) }}>
                            My Subscriptions
                        </div>
                    </>
                    :
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45.063" height="44.063" viewBox="0 0 45.063 44.063" onClick={() => { setcheckedCommentStar(1) }}>
                            <g id="user-check" transform="translate(1)">
                                <path id="Path_146" data-name="Path 146" d="M0,0H44.063V44.063H0Z" fill="none" />
                                <path id="Path_147" data-name="Path 147" d="M8,10.344A7.344,7.344,0,1,0,15.344,3,7.344,7.344,0,0,0,8,10.344" transform="translate(-4.328 2.508)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                <path id="Path_148" data-name="Path 148" d="M6,26.016V22.344A7.344,7.344,0,0,1,13.344,15h7.344" transform="translate(-6 12.54)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                <path id="Path_149" data-name="Path 149" d="M15,20.672l3.672,3.672L26.016,17" transform="translate(1.524 14.212)" fill="none" stroke="#37ff80" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            </g>
                        </svg>
                        <div className="VP_Right_TopBar_1_1" style={{ marginTop: "5px" }} onClick={() => { setcheckedCommentStar(1) }}>
                            My Subscriptions
                        </div>
                    </>
                }
                {checkedCommentStar === 2 ?
                    <>
                        <svg id="user-check" xmlns="http://www.w3.org/2000/svg" width="44.063" height="44.063" viewBox="0 0 44.063 44.063" style={{ marginLeft: "30px" }} onClick={() => { setcheckedCommentStar(2) }}>
                            <path id="Path_146" data-name="Path 146" d="M0,0H44.063V44.063H0Z" fill="none" />
                            <path id="Path_147" data-name="Path 147" d="M8,10.344A7.344,7.344,0,1,0,15.344,3,7.344,7.344,0,0,0,8,10.344" transform="translate(6.688 2.508)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <path id="Path_148" data-name="Path 148" d="M6,26.016V22.344A7.344,7.344,0,0,1,13.344,15h7.344" transform="translate(5.016 12.54)" fill="none" stroke="#d2db08" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <path id="Path_149" data-name="Path 149" d="M15,20.672l3.672,3.672L26.016,17" transform="translate(12.54 14.212)" fill="none" stroke="#37ff80" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </svg>
                        <div className="VP_Right_TopBar_2_1" style={{ marginTop: "5px" }} onClick={() => { setcheckedCommentStar(2) }}>
                            Transactions
                        </div>
                    </>
                    :
                    <>
                        <svg id="wallet" xmlns="http://www.w3.org/2000/svg" width="46.918" height="46.918" viewBox="0 0 46.918 46.918" style={{ marginLeft: "30px" }} onClick={() => { setcheckedCommentStar(2) }}>
                            <path id="Path_178" data-name="Path 178" d="M0,0H46.918V46.918H0Z" fill="none" />
                            <path id="Path_179" data-name="Path 179" d="M29.414,11.82V5.955A1.955,1.955,0,0,0,27.459,4H7.91a3.91,3.91,0,0,0,0,7.82H31.369a1.955,1.955,0,0,1,1.955,1.955v5.865m0,7.82v5.865a1.955,1.955,0,0,1-1.955,1.955H7.91A3.91,3.91,0,0,1,4,31.369V7.91" transform="translate(3.82 3.82)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <path id="Path_180" data-name="Path 180" d="M25.729,12v7.82H17.91a3.91,3.91,0,1,1,0-7.82h7.82" transform="translate(13.369 11.459)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </svg>
                        <div className="VP_Right_TopBar_2" style={{ marginTop: "5px" }} onClick={() => { setcheckedCommentStar(2) }}>
                            Transactions
                        </div>
                    </>
                }
                {checkedCommentStar === 3 ?
                    <>
                        <svg id="star" xmlns="http://www.w3.org/2000/svg" width="40.052" height="40.052" viewBox="0 0 40.052 40.052" style={{ marginLeft: "30px" }} onClick={() => { setcheckedCommentStar(3) }}>
                            <path id="Path_272" data-name="Path 272" d="M0,0H40.052V40.052H0Z" fill="none" />
                            <path id="Path_273" data-name="Path 273" d="M18.265,27.421,8.224,32.659l1.918-11.094L2.007,13.709,13.233,12.1,18.254,2,23.275,12.1,34.5,13.709l-8.135,7.856,1.918,11.094Z" transform="translate(1.759 1.755)" fill="none" stroke="#fc0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </svg>
                        <div className="VP_Right_TopBar_2_1" style={{ marginTop: "5px" }} onClick={() => { setcheckedCommentStar(3) }}>
                            My Favorites
                        </div>
                    </>
                    : <>
                        <svg id="star" xmlns="http://www.w3.org/2000/svg" width="40.052" height="40.052" viewBox="0 0 40.052 40.052" style={{ marginLeft: "30px" }} onClick={() => { setcheckedCommentStar(3) }}>
                            <path id="Path_272" data-name="Path 272" d="M0,0H40.052V40.052H0Z" fill="none" />
                            <path id="Path_273" data-name="Path 273" d="M18.265,27.421,8.224,32.659l1.918-11.094L2.007,13.709,13.233,12.1,18.254,2,23.275,12.1,34.5,13.709l-8.135,7.856,1.918,11.094Z" transform="translate(1.759 1.755)" fill="none" stroke="#e6e6e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </svg>
                        <div className="VP_Right_TopBar_2" style={{ marginTop: "5px" }} onClick={() => { setcheckedCommentStar(3) }}>
                            My Favorites
                        </div>
                    </>
                }
            </div>
        </div>
    );
};
export default VPRightTopBarStar;