import React from "react";
import { NavLink, Route } from "react-router-dom";
import profile from "./profile";

const profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };

  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/velopert">
            velopert 프로필
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/gildong">
            고길동 프로필
          </NavLink>
        </li>
      </ul>
      <Route
        exact
        path="/profiles"
        render={() => <div>사용자를 선택해 주세요.</div>}
      />
      <Route path="/profiles/:username" component={profile} />
    </div>
  );
};

export default profiles;
