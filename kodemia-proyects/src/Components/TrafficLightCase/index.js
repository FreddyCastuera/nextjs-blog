import '../../App.css';
import React, {Component} from 'react';
import GenericButton from '../GenericButton';
import TrafficLight from '../TrafficLigth';


class Case extends Component{
    constructor(){
        super()
        this.state={
        color:"verde"
    }
        this.handleButton = this.handleButton.bind(this);
    }
    
    handleButton(event){
        console.log(event.target.name)
        this.setState({color:event.target.name})
    }

    render(){
        return(
            <div className="contenedor">
                <TrafficLight color ={this.state.color}/>
                <div>
                    <GenericButton color="verde" handleButton={this.handleButton}/>
                    <GenericButton color="amarillo" handleButton={this.handleButton}/>
                    <GenericButton color="rojo" handleButton={this.handleButton}/>
                </div>
            </div>
        );
    }
}

export default Case