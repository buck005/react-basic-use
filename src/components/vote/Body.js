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
