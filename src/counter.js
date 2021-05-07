import React, { Component } from 'react';

class Counter extends Component{
    state = {count : 0};

    handleIncrement = () => {
        let count = this.state.count;
        this.setState({count : ++count});
    }

    handleDecrement = () => {
        let count = this.state.count;
        if(count > 0){
            this.setState({count : --count});
    }

    }

    render() {
        const btnStyle = {
            margin: "10px 15px",            
        }

        const textMargin = {
            marginTop : "5px"
        }

        

        const {counterNo, onDelete} = this.props

        return (
             <div className="container">
                 <div className="d-flex">
                     <div style={btnStyle}>
                        <h6 style={textMargin}>{counterNo}</h6>
                     </div>
                     <div style={btnStyle}>
                        <button className="btn btn-primary" onClick={this.handleIncrement}>+</button>
                     </div>
                    <div style={btnStyle}>
                        <p style={textMargin}>{this.state.count}</p>
                    </div>
                    <div style={btnStyle}>
                        <button className="btn btn-warning" onClick={this.handleDecrement}>-</button>
                    </div>
                    <div style={btnStyle}>
                        <button className="btn btn-danger" onClick={()=>onDelete(counterNo)}>Delete</button>
                    </div>
                 </div>
             </div>
        );
    }
}


export default Counter;