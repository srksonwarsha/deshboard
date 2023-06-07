import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<i class=" fas fa-light fa-house"  ></i>
        },
        {
            path:"/numbers",
            name:"Numbers",
            icon:<i class=" fas fa-regular fa-hashtag"></i>
        },
        {
            path:"/teams",
            name:"Teams",
            icon:<i class="fas fa-solid fa-people-group"></i>
        },
        {
            path:"/staff",
            name:"Staff",
            icon:<i class="fas fa-solid fa-user"></i>
        },
        {
            path:"/contacts",
            name:"Contacts",
            icon:<i class="fas fa-duotone fa-address-card"></i>
        },
        {
            path:"/callhistory",
            name:"Call History",
            icon:<i class="fas fa-solid fa-phone-flip"></i>
        },
        {
            path:"/insights",
            name:"Insights",
            icon:<FaThList/>
        }
    ]
    return (
        <>
        <div className='comman'>
         <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img className='logo' src='../image/logo.png'/></h1>
                   <div style={{marginLeft: isOpen ? "50px" : "19px"}} className="bars">
                        <FaBars onClick={toggle}/> 
                   </div>
                   
        </div>
        <div className='heade_icon'>   
                <div><span>Welcome Shashi<p>8210832273</p></span>
                </div>
                <button className='Logout_btn'>LogOut</button>     
        </div> 
        </div>
        <div className="div_container">
           <div style={{width: isOpen ? "20%" : "80px"}} className="sidebar">
              
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
         
           <main>{children}</main>
           
        </div>
        </>
    );
};

export default Sidebar;