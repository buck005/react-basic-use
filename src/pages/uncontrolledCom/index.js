import React, { Component } from "react";
import { Button } from "antd";
export default class Sum extends Component {
  constructor() {
    super();
    this.state = { result: "" };
  }
  //通过ref设置的属性 可以通过this.refs获取到对应的dom元素
  handleChange = () => {
    let result = parseInt(this.refs.a.value || 0) + parseInt(this.b.value || 0);
    this.setState({ result });
  };
  update() {
    this.setState({ result:100 });
  }
  render() {
    return (
      <div onChange={this.handleChange}>
        <div className="g-mb-20">
          <Button type="primary" onClick={() => this.update()}>修改</Button>
        </div>
        <input type="number" ref="a" />+
        {/*x代表的真实的dom,把元素挂载在了当前实例上*/}
        <input
          type="number"
          ref={(x) => {
            this.b = x;
          }}
        />
        {this.state.result}
      </div>
    );
  }
}
