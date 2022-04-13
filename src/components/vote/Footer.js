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
