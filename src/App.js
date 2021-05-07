import React,{ Component } from 'react';
import './App.css';
import Counter from './counter.js'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{
  state = {counter : [1]};

  increaseCounter = () => {
    let {counter} = this.state;
    let size = counter.length;
    counter.push(++size);
    this.setState({counter})
  };

  handleDelete = (item) => {
    const {counter} = this.state;
    let index = counter.indexOf(item);
    counter.splice(index, 1);
    this.setState({counter})
  }

  render() {
    const {counter} = this.state;

    
    return (
       <>
       <h3 className="text-center mt-2 mb-2">Simple Counter App</h3>
        {counter.map(item => (
          <Counter key={item} counterNo = {item} onDelete={()=>this.handleDelete(item)}/>
        ))}
        <button className="btn btn-success m-5" onClick={this.increaseCounter}>Add More</button>
       </>
    );
  }
}

export default App;
