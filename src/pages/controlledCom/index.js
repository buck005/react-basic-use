import React, { Component } from "react";
import { Button } from "antd";
export default class Sum extends Component {
  constructor() {
    super();
    this.state = { a: 1, b: 1 };
  }
  // key表示的就是当前状态改的是哪一个
  // e表示的是事件源
  handleChange(key, e) {
    //处理多个输入框的值映射到状态的方法
    this.setState({
      [key]: parseInt(e.target.value) || 0,
    });
  }
  update() {
    this.setState({ a: 100, b: 200 });
  }
  render() {
    return (
      <div>
        <div className="g-mb-20">
          <Button type="primary" onClick={() => this.update()}>
            修改
          </Button>
        </div>
        <input
          type="number"
          value={this.state.a}
          onChange={(e) => {
            this.handleChange("a", e);
          }}
        />
        +
        <input
          type="number"
          value={this.state.b}
          onChange={(e) => {
            this.handleChange("b", e);
          }}
        />
        {this.state.a + this.state.b}
      </div>
    );
  }
}
