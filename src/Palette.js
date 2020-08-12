import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';


class Palette extends Component{
    constructor(props){
        super(props);
        this.state={level:500}; 
        this.changeLevel=this.changeLevel.bind(this);
    }

    changeLevel(level){
        this.setState({level});
        
    }
    render(){
            const {level} = this.state;
            const colorBoxes=this.props.palette.colors[level].map(
                color=>(
                <ColorBox background={color.hex} name={color.name} />
            ));
            
        return(
           
            <div className='Palette'>
                <Navbar level={level} changeLevel={this.changeLevel} />
                {/* navbar here */}
                <div className='Palette-colors'>{colorBoxes}</div>
                {/* footer here */}
            </div>
        );
    }
}
export default  Palette; 