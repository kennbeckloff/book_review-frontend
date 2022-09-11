import React from "react";
import {
  NavLink,
  Outlet,
} from "react-router-dom";

function Landingpage() {
  return (
    <div className="Landingpage">
        <nav>
            <ul>
                <li>
                    <NavLink to={"login"}>
                        <button className="landingButton">Login</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"sign-up"}>
                        <button className="landingButton">Sign up</button>
                    </NavLink>
                </li>
            </ul>
        </nav>
        <div>
            <Outlet />
        </div>
    </div>
  );
}

export default Landingpage;
