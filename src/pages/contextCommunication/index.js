import React, { Component } from "react";
import Vote1 from "@/components/vote1";

export default class ContextCommunication extends Component {
  render() {
    return (
      <div>
        {/* 平行组件通信：拥有共同的父级，基于上下文来处理 */}
        <Vote1 title="韩国 VS 日本，支持韩国赢！"></Vote1>
      </div>
    );
  }
}
