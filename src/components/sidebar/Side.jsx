import React from "react";
import "./Side.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {  BiSearch, BiPlusCircle, BiBuildingHouse } from "react-icons/bi";
import { FaCalendar } from 'react-icons/fa';

function Sidebar() {
  const icons=[
    {id: 1, icon: <BiBuildingHouse />, label: "Home"},
    {id:2, icon: <BiSearch />, label: "Search"},
    { id: 3, icon: <BiPlusCircle />, label: "Add" },

    {id: 4, icon: <BiBuildingHouse />, label: "Home"},
    {id:5, icon: <BiSearch />, label: "Search"},
    { id: 6, icon: <BiPlusCircle />, label: "Add" },

    {id: 7, icon: <BiBuildingHouse />, label: "Home"},
    {id:8, icon: <BiSearch />, label: "Search"},
    { id: 9, icon: <BiPlusCircle />, label: "Add" },

    {id: 10, icon: <BiBuildingHouse />, label: "Home"},
    {id:11, icon: <BiSearch />, label: "Search"},
    { id: 12, icon: <BiPlusCircle />, label: "Add" },

    {id:13, icon: <BiSearch />, label: "Search"},
    
  ];






  return (
    <div className="sidebar">
      <div className="top-icons">
        {/* Map over the icons and render them dynamically */}
         {icons.map((icon) => (
          <div key={icon.id} className="icon" title={icon.label}>
            {icon.icon}
          </div>
        ))} 
      </div>
    </div>
  );
}

export default Sidebar;