import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";

class BasicExample extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    global.ReactRouterHistory = this.props.history;
  }
  render() {
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
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About props={this.props} />
            </Route>
            <Route path="/detail/:id" exact>
              <Detail props={this.props} />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default withRouter(BasicExample);
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}
class About extends Component {
  render() {
    let id = 100;
    let { props } = this.props;
    return (
      <div>
        <h2>
          <Link to={"/detail/10000?a=" + 1000}>About</Link>
          <p
            className="cursor"
            onClick={() => {
              props.history.push({ pathname: "/detail/" + id });
            }}
          >
            detail
          </p>
        </h2>
      </div>
    );
  }
}
class Detail extends Component {
  render() {
    // 解析参数
    let { props } = this.props;
    return <div>{/* <h2>paramsId:{props.match.params}</h2> */}2222222</div>;
  }
}
class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }
}
