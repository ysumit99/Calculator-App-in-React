import React from 'react';
import './Row.css';

class Row extends React.Component {

    render(){
        return(
            <div className="row">
                <div className="button" onClick={(e) => this.props.handleClick(e.target.textContent)}>{this.props.buttons[0]}</div>
                <div className="button" onClick={(e) => this.props.handleClick(e.target.textContent)}>{this.props.buttons[1]}</div>
                <div className="button" onClick={(e) => this.props.handleClick(e.target.textContent)}>{this.props.buttons[2]}</div>
                <div className="button" onClick={(e) => this.props.handleClick(e.target.textContent)}>{this.props.buttons[3]}</div>
            </div>
        )
    }
}

export default Row;