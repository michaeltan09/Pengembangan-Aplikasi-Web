import React from 'react';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {name : this.props.name}
    }
    render(){
        return(
            <div>
                <h2>Ini adalah halaman Home</h2>
            </div>
        );
    }
}