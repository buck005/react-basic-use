import React from "react";
import ReactDOM, { render } from "react-dom";

/*
  JSX渲染的原理
    1.基于babel中的babel-preset-react-app插件把jsx编译为React.createElement(...)的模式,
      ```
        每一个标签都会变成对应的createElement
        React.createElement(
            type 元素标签名,
            props 标签的属性集合[对象]，没有属性就是null,
            children
        );
    ```
*/
/*
  <div>
    <h1 style={{fongSize:16}} className="blue" >hello</h1>
    <ul>
      <li>张三</li>
      <li></li>
    </ul>
  </div>
*/
/*
    2.基于createElement生成一个JSX对象（虚拟DOM）
      ```
      生成一个对象
      {
          type:'标签名',
          props:{
            className:"box",
            style:{...},
            children:可能是一个数组（每一项都是一个子节点）\字符串\或者可能没有children（因为没有子节点）
          }
      }
*/
// 这里 JSXobj 就是所谓的虚拟 dom（用 js 对象描述 dom 属性）
let JSXObj = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    {
      style: {
        fontSize: "16px",
      },
      className: "blue",
    },
    "hello"
  ),
  React.createElement("ul", null, React.createElement("li", null, "张三"), React.createElement("li", null, ""))
);
console.log("JSXObj=>", JSON.stringify(JSXObj));

function createElement(type, props, ...childrens) {
  return {
    type: type,
    props: {
      ...props,
      children: childrens.length <= 1 ? childrens[0] : childrens,
    },
  };
}

let JSXObj1 = createElement(
  "div",
  null,
  createElement(
    "h1",
    {
      style: {
        fontSize: "16px",
      },
      className: "box",
    },
    "hello"
  ),
  createElement("ul", null, createElement("li", null, "123"), createElement("li", null, "456"))
);
console.log("JSXObj1=>", JSXObj1);
/*
  3.ReactDOM.render(jsxobj,container,callback)，基于render把jsx对象渲染成为真实的DOM,就是dom的动态创建
/*
  render(jsx,container,callback) 把JSX虚拟dom渲染成真实dom
    JSX
    CONTAINER：容器
    CALLBACK：回调函数（把JSX渲染到容器后执行的回调）
*/
// function render(jsxobj, container, callback) {
//   let { type, props } = jsxobj,
//     { children } = props;
//   let newElement = document.createElement(type);
//   // 属性和子元素处理
//   for (let attr in props) {
//     // 只处理私有属性
//     if (!props.hasOwnProperty(attr)) break;
//     switch (attr) {
//       case "className":
//         newElement.setAttribute("class", props[attr]);
//         break;
//       case "style":
//         let styleObj = props["style"];
//         for (let key in styleObj) {
//           if (styleObj.hasOwnProperty(key)) {
//             newElement["style"][key] = styleObj[key];
//           }
//         }
//         break;
//       case "children":
//         let childArr = props["children"];
//         childArr = childArr instanceof Array ? childArr : childArr ? [childArr] : [];
//         childArr.forEach((v) => {
//           if (typeof v === "string") {
//             // 字符串：文本节点
//             let textNode = document.createTextNode(v);
//             newElement.appendChild(textNode);
//           } else {
//             // 新的jsx元素，递归调用render，只不过此时的容易是当前创建的newElement
//             render(v, newElement);

//             // ... 函数式组件和类组件处理
//           }
//         });
//         break;
//       default:
//         newElement.setAttribute(attr, props[attr]);
//     }
//   }

//   container.appendChild(newElement);
//   callback && callback();
// }
// render(JSXObj1, window.root, () => {
//   console.log("渲染完成");
// });
