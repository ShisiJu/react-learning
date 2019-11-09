import React, { Component } from 'react'

class Table extends Component {

  render() {

    const arr = this.props.arr;
    return (
      <table>
        <tbody>
          <tr>
            <td> {arr[0]}</td>
            <td> {arr[1]}</td>
            <td> nihao</td>
          </tr>
          <tr>
            <td> fff</td>
            <td> nfffihao</td>
            <td> nifffhao</td>
          </tr>
        </tbody>
      </table>
    );
  }

}

export default Table;