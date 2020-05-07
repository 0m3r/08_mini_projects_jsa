import  React, {Component} from 'react';
import cat from '../logo.svg';

export default class Cat extends Component {

    // constructor() {
    //     super();

    //     this.state = {x:0, y:0};
    //     this.handleMouseMove = this.handleMouseMove.bind(this);
    // }

    // handleMouseMove(event) {
    //     this.setState({
    //         x: event.clientX,
    //         y: event.clientY,
    //     })
    // }

    render() {
        return (
           <img
                width={80}
                style={{position: "fixed", left: this.props.x, top: this.props.y}}
                src={cat}
                alt="x {this.props.x} y {this.props.y}"/>
        )
    }
}