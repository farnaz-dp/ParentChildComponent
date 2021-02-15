
import React from  'react'
import {Child} from "./Child";
import {Login} from "./Login";

class Parent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            labelState : "none"
        }
        console.log('Constructor of parent is called')
    }

    componentDidMount() {
        this.setState({labelState : "Asghar"})
        console.log('componentDidMount of parent is called')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate of parent is called')
    }

    toggleHandler = (state)=>{
        this.setState((state)=>{
            if(state.labelState == "none"){
                return  {labelState : "START"}
            }
            else if (state.labelState == "START")
            {
                // return  {labelState : "STOP"}
                this.stopHandler()
            }
            else if (state.labelState == "STOP")
            {
                // return  {labelState : "START"}
                this.startHandler()
            }

        })
    }

    startHandler = ()=>{
        this.setState(
            {labelState : "START"}
        )
    }
    stopHandler = ()=>{
        this.setState(
            {labelState : "STOP"}
        )
    }

    render() {
        return (
            <div>
                <Login/>
                <Child
                    label={this.state.labelState}
                    startHandler={this.startHandler}
                    stopHandler={this.stopHandler}
                    toggleHandler={this.toggleHandler}

                />
            </div>
        )
    }
}

export {Parent}
// export default Parent