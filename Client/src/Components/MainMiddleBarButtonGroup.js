import React from "react";
import '../Css/Components.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Button } from "reactstrap";
const MainMiddleBarButtonGroup = ({ checkedForYou, setCheckedForYou }) => {
    console.log("Button_group", checkedForYou)
    return (
        <div className={checkedForYou === 2? "MainMiddleBarButtonGroup_out_none" : "MainMiddleBarButtonGroup_out"}>
            <Button type="submit" color="info" className="MainMiddleBarButton_1" outline>Subscribe</Button>
            <Button type="submit" color="info" className="MainMiddleBarButton_2" outline style={{marginLeft: "30px"}}>Follow</Button>
        </div>
    );
};
export default MainMiddleBarButtonGroup;
