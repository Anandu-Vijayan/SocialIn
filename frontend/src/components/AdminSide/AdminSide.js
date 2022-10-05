import React from "react";
import "./AdminSide.css";
import { AdminSideData } from "../AdminSideData/AdminSideData.js";
import {NavLink} from 'react-router-dom'
const AdminSide = () => {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {AdminSideData.map((val, key) => {
          return (
            <NavLink style={{textDecoration:'none',color:"#FFFFFF",}} to={val.link}>
            <li
              key={key}
              className="row"
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminSide;
