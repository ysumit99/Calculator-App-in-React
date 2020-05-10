import React from 'react';
import './Calculator.css';
import Row from '../row/Row';

class Calculator extends React.Component {

    render() {
        let rows = [
            ["+", "-", "*", "/"],
            ["1", "2", "3", "4"],
            ["5", "6", "7", "8"],
            ["9", "0", ".", "="]
        ];
        return (
            <div className="calculator">
                <div className="displayBar"></div>
                <Row buttons={rows[0]}/>
                <Row buttons={rows[1]} />
                <Row buttons={rows[2]} />
                <Row buttons={rows[3]}/>
            </div>
        )
    }
}

export default Calculator;