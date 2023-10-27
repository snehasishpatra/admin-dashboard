import React from 'react'
import './featured.scss'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { CircularProgressbar } from 'react-circular-progressbar'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
// import { Circle } from '@mui/icons-material'
import "react-circular-progressbar/dist/styles.css";
// import { KeyboardArrowDown } from '@mui/icons-material';
function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredchart">
          <CircularProgressbar value={70} text ={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sale made today</p>
        <p className="amount">$420</p>
        <p className="desc">Previous transaction processing.Last payement may not be included.</p>
<div className="summary">
  <div className="item">
    <div className="itemtitle">Target</div>
     <div className="itemResult positive">
      <KeyboardArrowUpOutlinedIcon  fontSize="small"/>
      <div className="resultAmount">
        $12.4k
      </div>
     </div>
  </div>
  <div className="item">
    <div className="itemtitle">Last Week</div>
     <div className="itemResult positive">
      <KeyboardArrowUpOutlinedIcon  fontSize="small"/>
      <div className="resultAmount">
        $12.4k
      </div>
     </div>
  </div><div className="item">
    <div className="itemtitle">Last Month</div>
     <div className="itemResult negative">
      <KeyboardArrowDownOutlinedIcon  fontSize="small"/>
      <div className="resultAmount">
        $12.4k
      </div>
     </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Featured
