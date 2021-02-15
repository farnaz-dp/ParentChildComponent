
import React from "react";

class Child extends React.Component {
    constructor(props) {
        super(props);
        console.log('Constructor of child is called')
    }

    componentDidMount() {

        console.log('componentDidMount of child is called')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate of child is called')
    }

    render() {
        return (
            <div>
                <h2>{this.props.label}</h2>
                <button
                    onClick={this.props.startHandler}
                >
                    Start
                </button>
                <button
                    onClick={this.props.stopHandler}
                >
                    Stop
                </button>
                <button
                    onClick={this.props.toggleHandler}
                >
                    Toggle
                </button>
            </div>
        )


    }
}

export {Child}