import React from "react";
import "./topbar.css";
import {
  NotificationsNone,
  Language,
  Settings,
  PowerSettingsNewOutlined,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";

export default function Topbar() {
  const dispatch = useDispatch();
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ShopKart. Admin</span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div> */}
          {/* <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div> */}
          <div className="topbarIconContainer">
            <PowerSettingsNewOutlined onClick={() => dispatch(logout())} />
          </div>
          <img
            src="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
