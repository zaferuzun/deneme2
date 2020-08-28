import React, { Component } from 'react';
import Form  from  '../Form/Form';
import List  from  '../List/List';
import axios from 'axios';

class  App extends Component{
constructor(props)
{
  super(props);
  this.state={
    listArray:[],
    task:"",
    id:0,
    markedId:0
  };
  this.addTask=this.addTask.bind(this);
  this.getDeleteId=this.getDeleteId.bind(this);
  this.getMarkedId=this.getMarkedId.bind(this);
  this.getTasks=this.getTasks.bind(this);


}
addTask(task)
{
  //this.state.task=task.definations;
  this.setState({
    task:task.definations
  });
  this.state.task=task.definations;
  this.getTasks();


  //console.log(this.state.task);

}
getDeleteId(getDelete)
{
  //console.log("asdasdasdasdasd"+getDelete.id);
  this.state.id=getDelete.id;
  this.setState({
    id:getDelete.id
  })

}
getMarkedId(getMarked)
{
  //console.log("asdasdasdasdasd"+getDelete.id);
  this.state.markedId=getMarked.markedId;
  this.setState({
    markedId:getMarked.markedId
  });
}
getTasks()
{
  axios.get(`localhost:8080/tasks`)
  .then(res => {
    const persons = res.data;
    //this.state.listArray=persons;
    this.setState({ listArray:persons });

  });
}


  render()
  {
    return (
      <div className="App">
        <Form addTask={this.addTask}/>
        <List listArray={this.state.listArray} getDeleteId={this.getDeleteId}  getMarkedId={this.getMarkedId}/>
        {
        this.state.listArray.length!= 0 ? (
        console.log(this.state.listArray[0].showPoints) )
        : (
          <p></p>
        )
        }
      </div>
    );
  }

}

export default App;
