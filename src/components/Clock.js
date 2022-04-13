import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }
  componentDidMount() {
    setInterval(() => {
      //=>setState
      //1.修改状态信息(部分修改)
      //2.通知组件重新渲染(重新执行render)
      //3.回调函数：当状态修改完成，并且重新渲染后触发
      //4.异步操作
      this.setState({
        time: new Date().toLocaleString(),
      },() => {
          // 这里可以获取变更后的新状态
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        当前时间：
        <h2>{this.state.time}</h2>
      </div>
    );
  }
}
