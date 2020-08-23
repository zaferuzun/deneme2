import React, { Component } from 'react';

class  List extends Component{

  constructor(props)
  {
    super(props);

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
                  <tr>
                    <td>
                      {list.definations}
                    </td>
                    <td>
                      {list.marked}
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
