import React from 'react';
import './Calculator.css';
import Row from '../row/Row';

class Calculator extends React.Component {

    state = {
        input: "",
        result: "",
        isInputOperator: false,
        isResult: false
    }

    handleClick = (userInput) =>{
        console.log("userInput = " + userInput);
       
        const {input} = this.state;
        
        if(userInput === '='){ //Get Result
            
            let result = this.evaluateExpression(input);
            let updatedResultStatus = true;
            this.setState({result: result, isResult: updatedResultStatus, input: result});

        }else if(userInput === "C"){ //Clear Input

            let updatedResult = "";
            let updatedResultStatus = false;  
            let updatedInput = "";
            
            this.setState({
                result : updatedResult,
                isResult: updatedResultStatus,
                input : updatedInput
            })
        }else{ //Get Input

            let upadatedResultStatus = false;  
            let updatedInput = input + userInput;
            
            this.setState({
                input: updatedInput,
                isResult: upadatedResultStatus
            })
        }


       
  
    }

    evaluateExpression = (expression) => {
        return eval(expression);
    }

    
      
    

    render() {
       
        return (
            <div className="calculator">
                <div className="displayBar">{this.state.isResult ? this.state.result : this.state.input}</div>
                <Row buttons={this.props.rows[0]} handleClick={this.handleClick}/>
                <Row buttons={this.props.rows[1]} handleClick={this.handleClick}/>
                <Row buttons={this.props.rows[2]} handleClick={this.handleClick}/>
                <Row buttons={this.props.rows[3]} handleClick={this.handleClick}/>
            </div>
        )
    }
}

export default Calculator;