import React, { Component } from 'react';

class  Form extends Component{
  constructor(props)
{
  super(props);
    //fonksiyon bind
  this.onChange=this.onChange.bind(this);

  this.state={
    definations:""
  };
}
onChange(e)
{
  this.setState(
    {
      [e.target.name]:e.target.value
    }
  )
}
  render()
  {
    return (
      <div className="App">
        <input onChange={this.onChange} value={this.state.definations}>

        </input>
        <button>
        asdasd
        </button>
      </div>
    );
  }

}

export default Form;
