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
