import React, { Component } from 'react';

class  Form extends Component{
  constructor(props)
{
  super(props);
    //fonksiyon bind
    this.state={
      definations:''
    };

  this.onChange=this.onChange.bind(this);
  this.onSubmit=this.onSubmit.bind(this);

}

onChange(e)
{
  this.setState(
    {
      definations:e.target.value
    }
  );
  //console.log(this.state.definations);
}
onSubmit(e)
{
  e.preventDefault();
  this.props.addTask(
    {
      ...this.state
    }
  );
  

}
  render()
  {
    return (
      <div className="Form">
        <input name="definations" onChange={this.onChange} value={this.state.definations}/>

        <button onClick={this.onSubmit}>
        </button>
      </div>
    );
  }

}

export default Form;
