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
