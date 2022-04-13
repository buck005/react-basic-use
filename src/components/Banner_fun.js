import React from "react";
import { Carousel } from "antd";
export default function Banner(props) {
  // props 调用组件时传递的参数

  //   console.log(props);

  function onChange(a) {
    console.log(a);
  }
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#323d90",
  };
  let { dotPosition, title } = props;

  /*
        props 是组件的只读属性，组件内部不能直接修改 props，要想修改 props，只能在该组件的上层组件中修改
        在 React 中，props 是上层组件传递进来的值，这个值是父类的值，同 Vue 一样，props 的传值是单项数据流，也就是不会让影响父类的值，如果需要改值，可以先让 props 赋值给一个变量，在修改这个变量。
        其实就是保证 React 单向数据流的设计模式，使状态可预测。
        如果允许子组件修改，那么一个父组件将状态传递给好几个子组件，这几个子组件随意修改，就完全不可预测，不知道在什么地方修改了状态。
    */
  //   props.dotPosition = "right";
  // dotPosition = 'right' // 这样是可以修改的

  // 一定要写return，并且一定要返回当前组件jsx元素
  return (
    <div>
      <h1>{title}</h1>
      <Carousel afterChange={onChange} autoplay={true} dotPosition={dotPosition}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        {props.children}
      </Carousel>
    </div>
  );
}
