import React, { Component } from 'react';
import '../App.css';

class Grid extends Component{
  render(){
          let array =[];
          for(let i=0; i<this.props.rows;i++)
          {
              for(let j=0; j<this.props.cols; j++)
              {
                    let cellClass = this.props.grid[i][j] ? "cell live": "cell dead";    
                    array.push(
                    <div className={cellClass}
                        onClick={()=>{this.props.selectCell(i,j)}}>
                    </div>
                  )
              }
          }
          
      return(
          <div className="grid">
              {array}
          </div>
      )
  }
}

export default Grid