import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useLocation, useHistory, withRouter } from "react-router-dom";
import { queryURLParmeter } from "../../utils";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about1">About1</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/about1">
            <About1 />
          </Route>
          <Route path="/detail/:id" exact>
            <Detail />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
// 1、使用withRouter高阶组件,withRouter组件将注入history对象作为该组件的属性
const About = withRouter(({ history }) => {
  console.log(history);
  let id = 100;
  return (
    <div>
      <h2>
        <Link to={"/detail/" + 1000}>About</Link>
        <p className="cursor" onClick={() => history.push(`/detail/${id}`)}>
          detail
        </p>
      </h2>
    </div>
  );
});
// 2. 使用useHistory钩子（hook）,需要 react版本 >= 16.8
const About1 = () => {
  const history = useHistory();
  console.log(history);
  let id = 100;
  return (
    <div>
      <h2>
        <Link to={"/detail/" + 1000 + "?queryId=" + 100000}>About1</Link>
        <p className="cursor" onClick={() => history.push(`/detail/${id}`)}>
          detail
        </p>
      </h2>
    </div>
  );
};

function Detail() {
  // 解析参数 params /:id
  let { id } = useParams();

  // 解析参数 query ?a=xx
  let { search } = useLocation();
  let { queryId } = queryURLParmeter(search);
  return (
    <div>
      <h2>paramsId:{id}</h2>
      {queryId ? <h2>queryId:{queryId}</h2> : ""}
    </div>
  );
}
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
