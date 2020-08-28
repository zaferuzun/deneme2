import React, { Component } from 'react';

class  List extends Component{

  constructor(props)
  {
    super(props);
    this.state=
    {        
      id:0,
      markedId:0
    };
    this.getId=this.getId.bind(this);
    this.MarkedId=this.MarkedId.bind(this);



  }
  getId(ids)
  {
    this.state.id=ids;
    this.props.getDeleteId(
      {
        ...this.state
      }
    );
  }
  MarkedId(ids)
  {
    this.state.markedId=ids;
    this.props.getMarkedId(
      {
        ...this.state
      }
    );
  }
  render()
  {
    return (
      <div className="List">
        <h1>
        </h1>
        <table>
          <thead>
          </thead>
          <tbody>
            {
              this.props.listArray!= undefined ? (
                this.props.listArray.map(list =>
                  <tr >
                    <td id={list.definations} onClick={() => this.MarkedId(list.key)}>
                      {list.definations}
                    </td>
                    <td>
                      {list.marked}
                    </td>
                    <td>
                      <button value={list.key} onClick={() => this.getId(list.key)}>
                        Sil 
                      </button>
                    </td>
                  </tr>             
                  )
              ): (
                <p></p>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }

}

export default List;
