import React, { useState } from "react";
import { rString } from "../../utils";
import "./index.less";

const JsxUse = (props) => {
  const initData = [
    { id: 1, name: "张三", age: 18 },
    { id: 2, name: "李四", age: 20 },
  ];
  const [data, setData] = useState(initData);

  let styleObj = {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "green",
  };
  /*
  jsx是一种JS和HTML混合的语法糖,将组件的结构、数据、样式都聚合在一起定义组件,需要基于BABEL编译成为普通的js（babel-preset-react-app）
    写jsx需要注意已下几点：
      1.容器不能是BODY，否则会报警，会把你写在 body 里面写的 js 或者引用外部的 js 干掉
      2.根元素只能有一个
      3.大括号{}中存放的是JS表达式（必有返回结果） ->null/undefined/布尔/数字 也是jsx中的元素值，但是代表的是空 ->大括号绑定的值不能是对象类型的，但是给元素设置的属性值除外
      4.class属性被className代替(原因是class在js 中是关键字)
      5.style属性只能是样式对象，且css属性只能用驼峰命名,eg:background-color  =>  backgroundColor
      6.循环绑定的元素需要设置唯一的key值（当前本次循环唯一即可） =>真实项目中都是把列表数据的id作引作为key来使用 => key的值要稳定唯一
*/
  return (
    <div className="jsx-content" style={{ fontSize: 20 }}>
      <h1 className="title">hello react jsx</h1>
      <ul>
        {/* {{ a: 1 }} */}
        {/* {null}
        {undefined}
        {true}
        {123} */}
        {data.map((m) => {
          let { id, name, age } = m;
          return (
            <li key={rString(10)} data-attr={JSON.stringify(m)} style={{ ...styleObj }}>
              {/* {m} */}
              {name} - {age}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default JsxUse;
