
# react 中文官网：https://zh-hans.reactjs.org/
## 1.react 是什么？
React是facebook 2013年5月开源的，用于构建用户界面的 JavaScript 库，核心专注于视图,目的实现组件化开发

遵循组件设计模式、声明式编程范式和函数式编程概念，以使前端应用程序更高效

使用虚拟 DOM 来有效地操作 DOM，遵循从高阶组件到低阶组件的单向数据流

帮助我们将界面分成了各个独立的小块，每一个块就是组件，这些组件之间可以组合、嵌套，构成整体页面

```
import React from 'react';
import ReactDOM from 'react-dom';
class HelloWorld extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(
  <HelloWorld name="world" />,
  document.getElementById("root")
);
```
上述这种类似 XML 形式就是 JSX，最终会被 babel 编译为合法的 JS 语句调用

被传入的数据可在组件中通过 this.props 在 render() 访问

## 2.了解mvc模式(Model View Controller，模型-视图-控制器)
![image](https://5b0988e595225.cdn.sohucs.com/images/20191031/ab828a8eebed4df18a96c255289b76ab.jpeg)

React是一个单向数据流的库，数据(状态)驱动视图。

## 3.[create-react-app](https://zh-hans.reactjs.org/docs/create-a-new-react-app.html#create-react-app)是官方提供的脚手架(类似vue-cli)，可以快速的创建 react 应用，create-react-app 依赖于node，node >= 14.0.0 和 npm >= 5.6，基本使用如下：

**npx**
```
npx create-react-app my-app
cd my-app
npm start or yarm start
```
**npm**
```
npm init react-app my-app
cd my-app
npm start or yarn start
```
```
npm install create-react-app -g
create-react-app my-app
cd my-app
npm start or yarn start
```
注意：
+ 1.如果你的电脑上安装了 yarn 的话， create-react-app 会默认使用 yarn 而非 npm。如果你同时安装了 yarn 和 npm ，但你希望使用 npm 的话，在 create-react-app 的时候需要输入  --use-npm :
```
npx create-react-app my-app --use-npm
```
+ 2.create-react-app 脚手架创建的应用为了保证项目的整洁，把所有的 webpack 配置项和依赖模块全部隐藏起来，隐藏到了node_moudles/.bin/react-scripts中了，可以通过 npm run eject 暴露出来，eject 操作是不可逆的，一旦操作后无法撤回

+ 3.安装项目依赖的时，npm 和 yarn 最好不要混用，有可能会发生丢包或者混乱的情况


+ 应用结构

create-react-app 提供了开发React应用所需的工具。它的初始文件结构如下：
```
my-app
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```
## 4.React Jsx(Javascript and XML)属性和基本使用
+ jsx是一种JS和HTML混合的语法糖,将组件的结构、数据、样式都聚合在一起定义组件,需要基于BABEL编译成为普通的js（babel-preset-react-app）
    + 写jsx需要注意已下几点：
      + 1.容器不能是BODY，否则会报警，会把你写在 body 里面写的 js 或者引用外部的 js 干掉
      + 2.根元素只能有一个
      + 3.大括号{}中存放的是JS表达式（必有返回结果） ->null/undefined/布尔/数字 也是jsx中的元素值，但是代表的是空 ->大括号绑定的值不能是对象类型的，但是给元素设置的属性值除外
      + 4.class属性被className代替(原因是class在js 中是关键字)
      + 5.style属性只能是样式对象，且css属性只能用驼峰命名,eg:background-color  =>  backgroundColor
      + 6.循环绑定的元素需要设置唯一的key值（当前本次循环唯一即可） =>真实项目中都是把列表数据的id作引作为key来使用 => key的值要稳定唯一
```
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

```
## 5.了解 react中 jsx 的基本渲染原理
+ 1.了解浏览器渲染原理

![image](https://img-blog.csdnimg.cn/20210307111013516.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ExODc5MjYyNzE2OA==,size_16,color_FFFFFF,t_70)

可以看到这里，浏览器渲染需要三个引擎，HTML引擎、CSS引擎、JS引擎，页面渲染直接和html、css相关，生成一个DOM树和css规则树，最后合成一个渲染树，最后根据渲染树布局和绘制的操作，成本最高的布局，其次会绘制，绘制无法避免，但是我们可以减少绘制的次数，react 在更新页面元素的时候，通过虚拟 dom 对比就可以减少页面的重排和重绘，从而提高性能

+ 2. react jsx 渲染基本原理，主要分为已下三步：

1.基于[babel](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=usage&corejs=3.21&spec=false&loose=false&code_lz=FAHgJglgbgfMAE8QAsCM8DOAXAngGwFMBeAbxIDMB7AOwHMBlCALwIC5UA2AXy_gGM8AQwwYAcoIC2xAEQAjPAFcC0-DGQE8eSiAD0aOIhAK8BxEjwQYgAn1AkHK6Lpww8By5oG21e5YRIdxuLsiwQA&debug=false&forceAllTransforms=true&shippedProposals=true&circleciRepo=&evaluate=false&fileSize=false&timeTravel=true&sourceType=module&lineWrap=true&presets=react%2Cstage-2&prettier=true&targets=&version=7.17.9&externalPlugins=&assumptions=%7B%7D)中的babel-preset-react-app插件把jsx编译为React.createElement(...)的模式,
```
每一个标签都会变成对应的createElement
React.createElement(
    type 元素标签名,
    props 标签的属性集合[对象]，没有属性就是null,
    children
);

eg:
<div>
    <h1 style={{fongSize:16}} className="blue" >hello</h1>
    <ul>
      <li>张三</li>
      <li></li>
    </ul>
</div>

同通过 babel 插件编译为：

l// 这里 JSXobj 就是所谓的虚拟 dom（用 js 对象描述 dom 属性）
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
console.log("JSXObj=>", JSXObj);
```
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
```
```
{
    "type":"div",
    "key":null,
    "props":{
        "children":[
            {
                "type":"h1",
                "key":null,
                "props":{
                    "style":{
                        "fontSize":"16px"
                    },
                    "className":"blue",
                    "children":"hello"
                }
            },
            {
                "type":"ul",
                "key":null,
                "props":{
                    "children":[
                        {
                            "type":"li",
                            "key":null,
                            "props":{
                                "children":"张三"
                            }
                        },
                        {
                            "type":"li",
                            "key":null,
                            "props":{
                                "children":""
                            }
                        }
                    ]
                }
            }
        ]
    }
}
```
![image](http://cdn.kingcode.work/jsx.png)

3.ReactDOM.render(jsxobj,container,callback)，基于render把jsx对象渲染成为真实的DOM,就是dom的动态创建
```
render(jsx,container,callback) 把JSX虚拟dom渲染成真实dom
    JSX
    CONTAINER：容器
    CALLBACK：回调函数（把JSX渲染到容器后执行的回调）
```
## 6.组件创建方式

+ react中组件创建
    + 1.函数创建
    + 2.基于类创建

单闭合和双闭合调取组件区别:
  单闭合只能传递一些基础的属性，而双闭合不仅可以传递属性，而且属性中可以携带children子元素，可以基于用户自己扩展的子元素，实现组件的扩展性

函数式组件和类组件区别：
  1.函数组件是一个纯函数，不能在组件中使用setState()，所以把函数组件称作为无状态组件(静态组件)。
  2.函数组件没有自己的生命周期，不能使用生命周期函数
  
```
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Banner from "@/components/Banner_class";
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
        <Banner dotPosition={"left"} title="类组件组件"/ >

        {/*双闭合调取组件*/}
        <Banner dotPosition={"bottom"} title="类组件组件">
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
```
#### 6-1 函数式创建组件
```
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
```
#### 6-2 类方式创建组件
```
import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "antd";
export default class Banner extends React.Component {
  constructor(props) {
    super(props); 
    // console.log(this.props);
  }
  state = {
    contentStyle: {
      height: "160px",
      color: "#fff",
      lineHeight: "160px",
      textAlign: "center",
      background: "#364d79",
    },
  };

  // 设置默认值
  static defaultProps = {
    dotPosition: "bottom",
  };
  // 设置传递属性默认值的规则： prop-types  https://github.com/facebook/prop-types
  static propTypes = {
    dotPosition: PropTypes.string.isRequired,
  };
  onChange(a) {
    console.log(a);
  }
  componentDidMount() {
    // console.log("componentDidMount");
  }
  // 一定要写render，并且render一定要返回当前组件jsx元素
  render() {
    let { contentStyle } = this.state;
    let { dotPosition, children, title } = this.props;
    /*
        props 是组件的只读属性，组件内部不能直接修改 props，要想修改 props，只能在该组件的上层组件中修改
        在 React 中，props 是上层组件传递进来的值，这个值是父类的值，同 Vue 一样，props 的传值是单项数据流，也就是不会让影响父类的值，如果需要改值，可以先让 props 赋值给一个变量，在修改这个变量。
        其实就是保证 React 单向数据流的设计模式，使状态可预测。
        如果允许子组件修改，那么一个父组件将状态传递给好几个子组件，这几个子组件随意修改，就完全不可预测，不知道在什么地方修改了状态。
    */
    // this.props.dotPosition = "right";
    // dotPosition = 'right' // 这样是可以修改的
    return (
      <div>
        <h1>{title}</h1>
        <Carousel afterChange={this.onChange} autoplay={true} dotPosition={dotPosition}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          {children}
        </Carousel>
      </div>
    );
  }
}
```
## 7.组件状态
```
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
```
### 8.组件通信

#### 8-1 父子组件通信
> 父传子：属性

> 子传父：回调函数

最外层父组件
```
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
```
父组件
```
import React from 'react';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

export default class Vote extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            n: 0,
            m: 0
        }
    }
    // 复合组件通信
    // 父传子：属性
    // 子传父：回调函数
    support = (type) => {
        if(type === 'S'){
            this.setState({
                n: this.state.n + 1
            });
        }else{
            this.setState({
                m: this.state.m + 1
            });
        }
    }

    render(){
        let {title} = this.props;
        return <div className="panel panel-default" style={{padding:'10px'}}>
            <Header title={title}/>
            <Body n = {this.state.n} m={this.state.m}/>
            <Footer support={this.support}/>
        </div>
    }
}
```
子组件 Header
```
import React from 'react';

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {title} = this.props;
        return <div className="panel panel-heading">
           <h3 className='panel-title'>
               {title}
           </h3>
        </div>
    }
}
```
子组件 Body
```
import React from 'react';

export default class Body extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="panel panel-body">
            支持人数：{this.props.n}
            <br/><br/>
            反对人数：{this.props.m}
        </div>
    }
}
```
子组件 Footer
```
import React from 'react';

export default class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {support} = this.props;
        return <div className="panel panel-footer">
            <button className="btn btn-success" style={{'marginRight':'10px'}} onClick={()=>{support('S')}}>支持</button>
            <button className="btn btn-danger"  onClick={()=>{support()}}>反对</button>
        </div>
    }
}
```

#### 8-2 平行组件通信
> 拥有共同的父级，基于上下文处理

> Redux/Redux-saga/mobx/dva...

最外层父组件
```
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
```
父组件
```
import React from 'react';
import ProTypes from 'prop-types';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

export default class Vote1 extends React.Component{

    // 祖先组件设置后代元素可以使用的上下文
    static childContextTypes = { 
        n:ProTypes.number,
        m:ProTypes.number,
        support:ProTypes.func
    }

    getChildContext(){
        // 供后代元素使用的上下文信息，只要RENDER重新渲染，就会执行这个方法，重新更新父组件中的上下文信息；如果父组件上下文信息更改了，子组件在重新调取的时候，会使用最新的上下文信息；
        return {
            n: this.state.n,
            m: this.state.m,
            support: this.support
        }
    }

    constructor(props){
        super(props);
        this.state = {
            n: 0,
            m: 0
        }
    }

    support = (type) => {
        if(type === 'S'){
            this.setState({
                n: this.state.n + 1
            });
        }else{
            this.setState({
                m: this.state.m + 1
            });
        }
    }

    render(){
        let {title} = this.props;
        return <div className="panel panel-default" style={{padding:'10px'}}>
            <Header title={title}/>
            <Body />
            <Footer />
        </div>
    }
}
```
子组件 Header
```
import React from 'react';

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {title} = this.props;
        return <div className="panel panel-heading">
           <h3 className='panel-title'>
               {title}
           </h3>
        </div>
    }
}
```
子组件 Body
```
import React from 'react';
import ProTypes from 'prop-types';

export default class Body extends React.Component{
    // 后代想用哪些上下文信息，就把用到的信息设置一下类型（类型需要和祖先中设置的一样）
    static contextTypes = {
        n:ProTypes.number,
        m:ProTypes.number
    }

    constructor(props){
        super(props);
    }

    render(){console.log(this)
        return <div className="panel panel-body">
            支持人数：{this.context.n}
            <br/><br/>
            反对人数：{this.context.m}
        </div>
    }
}
```
子组件 Footer
```
import React from 'react';
import ProTypes from 'prop-types';

export default class Footer extends React.Component{

    static contextTypes = {
        support:ProTypes.func
    }

    constructor(props){
        super(props);
    }

    render(){
        let {support} = this.context;
        return <div className="panel panel-footer">
            <button className="btn btn-success" style={{'marginRight':'10px'}} onClick={()=>{support('S')}}>支持</button>
            <button className="btn btn-danger"  onClick={()=>{support()}}>反对</button>
        </div>
    }
}
```
## 9.受控组件与非受控组件
    
+ 受控组件
    + 受控组件，简单来讲，就是受我们控制的组件，组件的状态全程响应外部数据 操作数据 => setState
```
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
```
+ 非受控组件
    + 非受控组件，简单来讲，就是不受我们控制的组件，也就是不受状态影响的组件：操作DOM => refs
```
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
```

## 10.[react router](https://v5.reactrouter.com/web/example/basic)参考中文文档：https://react-guide.github.io/react-router-cn/

函数组件路由跳转传参示例：
```
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useLocation, useHistory, withRouter } from "react-router-dom";
import { queryURLParmeter } from "../../utils";

export default function BasicExample() {
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
            <Link to="/about1">About1</Link>
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
            <About />
          </Route>
          <Route path="/about1">
            <About1 />
          </Route>
          <Route path="/detail/:id" exact>
            <Detail />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
// 1、使用withRouter高阶组件,withRouter组件将注入history对象作为该组件的属性
const About = withRouter(({ history }) => {
  console.log(history);
  let id = 100;
  return (
    <div>
      <h2>
        <Link to={"/detail/" + 1000}>About</Link>
        <p className="cursor" onClick={() => history.push(`/detail/${id}`)}>
          detail
        </p>
      </h2>
    </div>
  );
});
// 2. 使用useHistory钩子（hook）,需要 react版本 >= 16.8
const About1 = () => {
  const history = useHistory();
  console.log(history);
  let id = 100;
  return (
    <div>
      <h2>
        <Link to={"/detail/" + 1000 + "?queryId=" + 100000}>About1</Link>
        <p className="cursor" onClick={() => history.push(`/detail/${id}`)}>
          detail
        </p>
      </h2>
    </div>
  );
};

function Detail() {
  // 解析参数 params /:id
  let { id } = useParams();

  // 解析参数 query ?a=xx
  let { search } = useLocation();
  let { queryId } = queryURLParmeter(search);
  return (
    <div>
      <h2>paramsId:{id}</h2>
      {queryId ? <h2>queryId:{queryId}</h2> : ""}
    </div>
  );
}
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

```

## 11.生命周期

![image](http://cdn.kingcode.work/react%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png)

##### 初始化

> 1.getDefaultProps(){} 

```
设置默认的props，也可以用dufaultProps设置组件的默认属性.
```
> 2.getInitialState(){} 

```
在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props
```
> 3.componentWillMount(){} 

```
组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。
```
> 4.render(){} 

```
react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了。
```
##### 更新

> 5.componentDidMount(){} 

```
组件渲染之后调用，只调用一次。
```
> 6.componentWillReceiveProps(nextProps){} 

```
组件初始化时不调用，组件接受新的props时调用。
```
> 7.shouldComponentUpdate(nextProps, nextState){} 

```
react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候
```
> 8.componentWillUpdata(nextProps, nextState){} 

```
组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
```
> 9.render(){} 

```
组件渲染
```
> 10.componentDidUpdate(){} 

```
在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props
```
##### 卸载

> 11.componentWillUnmount(){} 

```
组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
```
##### 常用钩子 

```
//-> //组件加载前调用
componentWillMount(){

}
//-> //组件加载完成调用
componentDidMount(){

}
```
#### 生命周期示例
```
import React, { Component } from "react";
import ReactDOM from "react-dom";
export default class Counter extends React.Component {
  // 他会比较两个状态相等就不会刷新视图 PureComponent是浅比较
  static defaultProps = {
    name: "hello react",
  };
  constructor(props) {
    super();
    this.state = { number: 0 };
    console.log("1.constructor构造函数");
  }
  componentWillMount() {
    // 取本地的数据 同步的方式：采用渲染之前获取数据，只渲染一次
    console.log("2.组件将要加载 componentWillMount");
  }
  componentDidMount() {
    console.log("4.组件挂载完成 componentDidMount");
  }
  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };
  // react可以shouldComponentUpdate方法中优化 PureComponent 可以帮我们做这件事
  shouldComponentUpdate(nextProps, nextState) {
    // 代表的是下一次的属性 和 下一次的状态
    console.log("5.组件是否更新 shouldComponentUpdate");
    return nextState.number % 2 == 1;
    // return nextState.number!==this.state.number; //如果此函数种返回了false 就不会调用render方法了
  } //不要随便用setState 可能会死循环
  componentWillUpdate() {
    console.log("6.组件将要更新 componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("7.组件完成更新 componentDidUpdate");
  }
  render() {
    console.log("3.render");
    return (
      <div>
        <p>{this.state.number}</p>
        {this.state.number > 10 ? null : <ChildCounter n={this.state.number} />}
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
class ChildCounter extends Component {
  componentWillUnmount() {
    console.log("child组件将要卸载componentWillUnmount");
  }
  componentWillMount() {
    console.log("child componentWillMount");
  }
  render() {
    console.log("child-render");
    return <div>{this.props.n}</div>;
  }
  componentDidMount() {
    console.log("child componentDidMount");
  }
  componentWillReceiveProps(newProps) {
    // 第一次不会执行，之后属性更新时才会执行
    console.log("child componentWillReceiveProps");
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.n % 2 == 1; //子组件判断接收的属性 是否满足更新条件 为true则更新
  }
}
```
## 12. hooks 使用
```
import React, { useState, useEffect } from "react";
const Couter = () => {
  let [state, setState] = useState(0);

  return (
    <>
      <p>{state}</p>
      <button onClick={() => setState(state + 1)}>+</button>
    </>
  );
};

// 副作用：ajax 操作DOM 修改浏览器标题...
// useEffect是一个钩子，他里面的函数会在组件渲染完成后执行
const Couter1 = () => {
  let [name, setName] = useState("king");
  let [number, setNumber] = useState(0);
  // 依赖如果不传，每次都会更新都会执行，如果传一个空数组，只会执行一次
  useEffect(() => {
    console.log(number);
  }, [number]);
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => setName(Date.now())}>修改名称</button>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  );
};

export default Couter1;
```
