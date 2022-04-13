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
