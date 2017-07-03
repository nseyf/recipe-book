import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {




    return (
<div className="container-fluid" style={{marginBottom: "5px"}}>
      <ul className="nav navbar-nav navbar-center">
        <li className="nav-item">
          <Link className="nav-link active" to='/'>
            <button className="btn">HOME</button>
            </Link>
            </li>
  <li className="nav-item">
    <Link className="nav-link active" to='/create'>
      <button className="btn">CREATE A RECIPE</button>
      </Link>
    </li>
      </ul>
</div>
    )
}
