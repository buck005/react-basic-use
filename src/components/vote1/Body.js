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
