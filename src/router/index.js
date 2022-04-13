import Clock from "@/components/Clock";
import Vote1 from "@/components/vote1";
import ComCommunication from "@/pages/comCommunication";
import ContextCommunication from "@/pages/contextCommunication";
import ControlledCom from "@/pages/controlledCom";
import UncontrolledCom from "@/pages/uncontrolledCom";
import HookRouterUse from "@/pages/hookRouterUse";
import ClassRouterUse from "@/pages/classRouterUse";
import FuncCom from "@/pages/funcCom";
import ClassCom from "@/pages/classCom";
import JsxUse from "@/pages/jsxUse";
import LifeCycle from "@/pages/lifeCycle";
import HookUse from "@/pages/hookUse";
// import { AppstoreOutlined, MenuUnfoldOutlined, MenuFoldOutlined, PieChartOutlined, DesktopOutlined, ContainerOutlined, MailOutlined } from "@ant-design/icons";

const routes = [
  {
    title: "ReactJsx",
    path: "/jsxUse",
    name: "jsxUse",
    component: JsxUse,
    icon: "DesktopOutlined",
    children: [],
  },
  {
    title: "函数式组件",
    path: "/funcCom",
    name: "funcCom",
    component: FuncCom,
    icon: "DesktopOutlined",
    children: [],
  },
  {
    title: "类组件",
    path: "/classCom",
    name: "classCom",
    component: ClassCom,
    icon: "DesktopOutlined",
    children: [],
  },
  {
    title: "组件状态",
    path: "/clock",
    name: "clock",
    component: Clock,
    icon: "AppstoreOutlined",
    children: [],
  },
  {
    title: "复合组件通信示例",
    path: "",
    name: "comProps",
    component: "",
    icon: "MenuUnfoldOutlined",
    children: [
      {
        title: "父子组件通信",
        path: "/comCommunication",
        name: "comCommunication",
        component: ComCommunication,
        icon: "",
        children: [],
      },
      {
        title: "平行组件通信",
        path: "/contextCommunication",
        name: "contextCommunication",
        component: ContextCommunication,
        icon: "",
        children: [],
      },
    ],
  },
  {
    title: "受控组件",
    path: "/controlledCom",
    name: "controlledCom",
    component: ControlledCom,
    icon: "",
    children: [],
  },
  {
    title: "非受控组件",
    path: "/uncontrolledCom",
    name: "uncontrolledCom",
    component: UncontrolledCom,
    icon: "",
    children: [],
  },
  {
    title: "路由基本使用",
    path: "",
    name: "routerUse",
    component: "",
    icon: "PieChartOutlined",
    children: [
      {
        title: "函数组件路由",
        path: "/hookRouterUse",
        name: "hookRouterUse",
        component: HookRouterUse,
        icon: "",
        children: [],
      },
      // {
      //   title: "类组件路由",
      //   path: "/classRouterUse",
      //   name: "classRouterUse",
      //   component: ClassRouterUse,
      //   icon: "",
      //   children: [],
      // },
    ],
  },
  {
    title: "生命周期",
    path: "/lifeCycle",
    name: "lifeCycle",
    component: LifeCycle,
    icon: "",
    children: [],
  },
  {
    title: "hooks使用",
    path: "/hookUse",
    name: "hookUse",
    component: HookUse,
    icon: "",
    children: [],
  },
];

export default routes;
