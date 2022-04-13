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
