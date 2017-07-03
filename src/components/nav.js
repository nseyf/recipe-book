import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {

const buttonStyle = {
border: "none",
borderRadius: "0",
background: "white",
fontWeight: "700",
borderRight: "5px solid #f5f5f5",
color: "#151515"
}


    return (
<div className="container-fluid">
      <ul className="nav navbar-nav navbar-center">
        <li className="nav-item">
          <Link className="nav-link active" to='/'>
            <button className="btn" style={buttonStyle}>HOME</button>
            </Link>
            </li>
  <li className="nav-item">
    <Link className="nav-link active" to='/create'>
      <button className="btn" style={buttonStyle}>CREATE A RECIPE</button>
      </Link>
    </li>
      </ul>
</div>
    )
}
