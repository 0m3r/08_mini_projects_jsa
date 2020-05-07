import  React, {Component} from 'react';

export default class Mouse extends Component {

    constructor() {
        super();

        this.state = {x:0, y:0};
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY,
        })
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                {this.props.children(this.state)}
            </div>
        )
    }
}