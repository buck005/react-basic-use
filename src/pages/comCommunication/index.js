import React, { Component } from "react";
import Vote from "@/components/vote";

export default class ComCommunication extends Component {
  render() {
    return (
      <div>
        {/* 父子组件通信：父传子：属性   子传父：回调函数 */}
        <Vote title="法国 VS 德国，支持法国赢！"></Vote>
      </div>
    );
  }
}
