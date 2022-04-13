import React, { Component } from "react";
import ReactDOM from "react-dom";
import Banner from "@/components/Banner_fun";

/*
 * REACT中创建组件
 *   1.函数创建
 *   2.基于类创建
 *
 * 单闭合和双闭合调取组件的区别
 *   单闭合只能传递一些基础的属性，而双闭合不仅可以传递属性，而且属性中可以携带children子元素，基于用户自己扩展的子元素，实现组件的扩展性
 */
export default class FuncCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentStyle: {
        height: "160px",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
      },
    };
  }

  render() {
    let { contentStyle } = this.state;
    return (
      <div>
        {/*轮播图*/}
        <Banner dotPosition={"left"} title="函数式组件" />

        {/*双闭合调取组件*/}
        <Banner dotPosition={"bottom"} title="函数式组件">
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Banner>
      </div>
    );
  }
}
