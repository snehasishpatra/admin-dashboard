import './sidebar.scss'
import React from 'react'
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
// import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import PollIcon from '@mui/icons-material/Poll'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream'
import PsychologyIcon from '@mui/icons-material/Psychology'
import SettingsIcon from '@mui/icons-material/Settings'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
// import PersonPinIcon from '@mui/icons-material/PersonPin';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import AddBusinessIcon from '@mui/icons-material/AddBusiness'
import AddCardIcon from '@mui/icons-material/AddCard'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  const {dispatch}= useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">iamadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
        <Link to="/Users" style={{textDecoration:"none"}}>
          <li>
            <PersonOutlineOutlinedIcon className='icon' />
            <span>Users</span>
          </li>
          </Link>
        <Link to="/Products" style={{textDecoration:"none"}}>
          <li>
            <AddBusinessIcon className='icon' />
            <span>Products</span>
          </li>
          </Link>
          <li>
            <AddCardIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <PollIcon  className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <LocalShippingIcon className='icon'  />
            <span>Delivery</span>
          </li>
        <p className="title">USEFUL</p>
          <li>
            <NotificationsNoneIcon className='icon' />
            <span>Notification</span>
          </li>
        <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon' />
            <span>Settings</span>
          </li>
        <p className="title">USER</p>
          <li>
            <PersonOutlineOutlinedIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className="colorOption"  onClick={()=>dispatch({type:"DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar
//2:57