import  React, {Component} from 'react';
import cat from '../logo.svg';

export default class Cat extends Component {
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