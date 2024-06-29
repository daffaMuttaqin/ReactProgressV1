import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="mb-3">
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <details>
                <summary>Profil</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link to={"/user"}>User</Link>
                  </li>
                  <li>
                    <a>Admin</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
