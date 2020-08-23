import React, { Component } from 'react';
import Form  from  '../Form/Form';
import List  from  '../List/List';

class  App extends Component{
constructor(props)
{
  super(props);
  this.state={
    listArray:[{
      key:1,
      definations:"açıklama",
      marked:"seçildi"
    }
    ]
  };
  this.addTask=this.addTask.bind(this);
}
addTask()
{

}

  render()
  {
    return (
      <div className="App">
        <Form/>
        <List listArray={this.state.listArray}/>
      </div>
    );
  }

}

export default App;
