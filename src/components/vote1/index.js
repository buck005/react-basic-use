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
