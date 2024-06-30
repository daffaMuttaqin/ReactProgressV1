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
                <summary>CRUD</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link to={"/get"}>GET</Link>
                  </li>
                  <li>
                    <Link to={"/post"}>POST</Link>
                  </li>
                  <li>
                    <Link to={"/put"}>PUT</Link>
                  </li>
                  <li>
                    <Link to={"/delete"}>DELETE</Link>
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
