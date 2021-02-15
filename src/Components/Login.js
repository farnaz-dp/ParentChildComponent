
import React from "react";

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLogged : false,
            isLog : false
        }
    }

    loginHandler = ()=>{
        this.setState(
            {isLogged : true}
        )
    }


    logoutHandler = ()=>{
        this.setState(
            {isLogged : false}
        )
    }

    toggleHandler = () =>{
        this.setState(
            prevState => {
               if (prevState.isLog){
                   return {isLog: false}
               }
               else
               {
                   return {isLog: true}
               }
            }
        )
    }

    btnRender = ()=>{
        return(
            <button
                onClick={this.toggleHandler}
                style={
                    this.state.isLog ? {backgroundColor:"green", color:"white"} : {backgroundColor: "#1de9bf" , color:"white"}
                }
            >
                {this.state.isLog ? "Logout" : "Login"}
            </button>
        )
    }

    buttonRender = ()=>{
        if (this.state.isLogged){
            return(
                <button
                onClick={this.logoutHandler}
                    style={{backgroundColor: "red"}}
                >
                    Logout
                </button>
            )
        }
        else {
            return (
                <button
                    onClick={this.loginHandler}
                    style={{backgroundColor: "blue", color:"white"}}
                >
                    Login
                </button>
            )
        }
    }

    render() {
        return(
            <div>
                {this.buttonRender()}
                {this.btnRender()}
            </div>
        )
    }
}

export {Login}