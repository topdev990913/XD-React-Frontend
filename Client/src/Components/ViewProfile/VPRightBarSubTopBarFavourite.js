import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const VPRightBarSubTopBarFavourite = ({ checkedFavourite, setCheckedFavourite }) => {
    return (
        <div className="VPRightBarSubTopBar_out d-flex">
            <div className={checkedFavourite ? "VPRightBarSubTopBar_1" : "VPRightBarSubTopBar_1_1"} onClick={() => { setCheckedFavourite(true) }}>
                Favorite Comments
            </div>
            <div className={checkedFavourite ? "VPRightBarSubTopBar_2" : "VPRightBarSubTopBar_2_1"} onClick={() => { setCheckedFavourite(false) }}>
                Favorite Editors
            </div>
        </div>
    );
};
export default VPRightBarSubTopBarFavourite;