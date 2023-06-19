import React from "react";
import "./VPSubscriber.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Favourite_Avatar from '../../../assets/couple-of-lovers-hugging-on-the-beach-party-on-sum-2021-08-26-17-31-01-utc123456789.png';
import { Button } from "reactstrap";
import { Link } from 'react-router-dom';

const VPFavouriteCard = ({ checkedFavourite, setCheckedFavourite }) => {
    return (
        <div className="VPFavouriteCard_out">
            <img src={Favourite_Avatar} alt="Favourite_Avatar" className="Favourite_Avatar" />
            <div className="VPFavouriteCard_1">
                melih1905
            </div>
            <div className="VPFavouriteCard_2" style={{marginLeft: "52.2px"}}>
                %63.2
            </div>
            <div className="VPFavouriteCard_3" style={{marginLeft: "45.1px"}}>
                1.365
            </div>
            <svg id="ball-football_1_" data-name="ball-football (1)" xmlns="http://www.w3.org/2000/svg" width="30.29" height="30.289" viewBox="0 0 30.29 30.289" style={{marginLeft: "37.6px"}}>
                <path id="Path_54" data-name="Path 54" d="M0,0H30.29V30.289H0Z" transform="translate(0 0)" fill="none" />
                <path id="Path_55" data-name="Path 55" d="M14.3,14.3,3,14.3A11.3,11.3,0,1,0,14.3,3,11.3,11.3,0,0,0,3,14.3" transform="translate(0.841 0.841)" fill="none" stroke="#00c936" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                <path id="Path_56" data-name="Path 56" d="M13.335,7l6.1,4.418-2.254,7.106H9.494L7.24,11.418Z" transform="translate(1.81 1.757)" fill="none" stroke="#00c936" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                <path id="Path_57" data-name="Path 57" d="M14.163,8.122V3m3.764,16.646,3.136,3.841m-.928-10.948,4.692-1.857M10.475,19.71,7.264,23.487m.928-10.948L3.5,10.683" transform="translate(0.982 0.841)" fill="none" stroke="#00c936" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            </svg>
            <svg id="ball-basketball_1_" data-name="ball-basketball (1)" xmlns="http://www.w3.org/2000/svg" width="30.29" height="30.289" viewBox="0 0 30.29 30.289">
                <path id="Path_58" data-name="Path 58" d="M0,0H30.29V30.289H0Z" transform="translate(0 0)" fill="none" />
                <path id="Path_59" data-name="Path 59" d="M14.334,14.334,3,14.334A11.334,11.334,0,1,0,14.334,3,11.334,11.334,0,0,0,3,14.334" transform="translate(0.811 0.811)" fill="none" stroke="#ff9100" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                <path id="Path_60" data-name="Path 60" d="M5.65,5.65,21.586,21.585" transform="translate(1.527 1.527)" fill="none" stroke="#ff9100" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                <path id="Path_61" data-name="Path 61" d="M5.65,21.585,21.586,5.65" transform="translate(1.527 1.527)" fill="none" stroke="#ff9100" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                <path id="Path_62" data-name="Path 62" d="M12,3A11.432,11.432,0,0,0,23.433,14.432" transform="translate(3.046 0.811)" fill="none" stroke="#ff9100" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                <path id="Path_63" data-name="Path 63" d="M3,12A11.432,11.432,0,0,1,14.433,23.432" transform="translate(0.811 3.046)" fill="none" stroke="#ff9100" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            </svg>
            <Link to="/FavoriteViewProfile"><Button type="submit" className="Favourite_ViewProfile_butoon" outline style={{marginLeft: "65.7px"}}>View Profile</Button></Link>
            <svg id="star" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" style={{marginLeft: "10px"}}>
                <path id="Path_272" data-name="Path 272" d="M0,0H35V35H0Z" fill="none" />
                <path id="Path_273" data-name="Path 273" d="M16.215,24.215,7.44,28.792,9.116,19.1,2.007,12.233l9.81-1.411L16.2,2l4.388,8.82,9.81,1.411L23.294,19.1l1.676,9.695Z" transform="translate(1.284 1.281)" fill="none" stroke="#fc0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </svg>
        </div>
    );
};
export default VPFavouriteCard;
