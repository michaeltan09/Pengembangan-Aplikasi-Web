import React, {Component} from 'react';
import Card from './components/Card/Card';
import Input from './components/Input/Input';

export default class Main extends Component{
    constructor(){
        super();
        this.state = {
            your_name : '',
            status : ''
        }
    }

    render(){
        return(
            <React.Fragment>
                <h2 style={{width: '550px', margin: 'auto', textAlign: 'center', color: '#4d90fe'}}>
                    Sistem Informasi E-biz
                </h2>
                <Input getValues={(name, value)=> this.setState({[name]: value})} />

                <Card.Container>
                  <Card.Header>
                  <b style={{fontweight:'bold', color: '#365899'}}> {this.state.your_name} </b>
                  </Card.Header>
                    <Card.Body>
                    <p>{this.state.status}</p>
                    </Card.Body>
                </Card.Container>
            </React.Fragment>
        );
    }
    
    // render(){
    //     return(
    //         <Card>
    //             <p>Build encapsulated components that manage their own state, then compose them to make the complex UIs.</p> {/* <--- Children dari component Card*/}
    //         </Card>
    //     );
    // }
}