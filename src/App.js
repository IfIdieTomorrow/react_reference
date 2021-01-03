import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import profiles from "./profiles";
import HistorySample from "./HistorySample";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={["/about", "/info"]} component={About} />
        <Route path="/profiles" component={profiles} />
        <Route path="/history" component={HistorySample} />
        {/* path를 따로 정의하지 않으면 모든 상황에 렌더링됨 */}
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:( </h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
