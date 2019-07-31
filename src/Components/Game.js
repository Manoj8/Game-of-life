import React, { Component } from 'react';
import '../App.css';
import Grid from './Grid';

class Game extends Component {
    constructor(){
    super();
    this.rows = 12;
    this.cols = 12;
    this.state ={
      grid: Array(this.rows).fill().map(()=> Array(this.cols).fill(false)),
      count : 0,
      timer: null
    }
}

selectCell = (row,col)=>{
  let clone = arrayClone(this.state.grid);
  clone[row][col] = !clone[row][col]
  this.setState({
    grid: clone
  })
}

start = ()=>{
  let gridOld = this.state.grid;
  let clone = arrayClone(this.state.grid);
  
  for(let i=0; i<this.rows;i++)
  {
    for(let j=0; j<this.cols; j++)
    {
      let count = 0;
      if (i > 0) 
      {
        if (gridOld[i - 1][j])
          count++;
      }
      
      if (i > 0 && j > 0) 
      {
        if (gridOld[i - 1][j - 1])
          count++;
      }

      
      if (i > 0 && j < this.cols - 1) 
      { 
        if (gridOld[i - 1][j + 1])
          count++;
      }

      
      if (j < this.cols - 1) 
      {
        if (gridOld[i][j + 1])
          count++;
      }

      
      if (j > 0) 
      {
        if (gridOld[i][j - 1])
          count++;
      } 

      if (i < this.rows - 1) 
      {
        if (gridOld[i + 1][j])
          count++;
      }

      if (i < this.rows - 1 && j > 0) 
      {
        if (gridOld[i + 1][j - 1])
          count++;
      }
                                                                                                   
      if (i < this.rows - 1 && j < this.cols - 1) 
      {
        if (gridOld[i + 1][j + 1])
          count++;
      }

      if(gridOld[i][j] && (count < 2 || count > 3))
        clone[i][j] = false;
      
      if(!gridOld[i][j] && count===3)
        clone[i][j] = true;       
    }
  }
  this.setState({
    grid: clone
  }
)
}


delay = ()=>{
  if(this.state.count===0)
  {
    this.setState({
    timer : setInterval(this.start, 500),
    count : 1
  })
  }
}

stop = () =>{
  clearInterval(this.state.timer);
  this.setState({count:0});
}

speed = () =>{
  this.setstate({count:0})
}

clear = () =>{
  let clone = arrayClone(this.state.grid);
  for(let i=0; i<this.rows;i++)
  {
      for(let j=0; j<this.cols; j++)
      {
        clone[i][j] = false;
        
      }
  }
  this.setState({
    grid: clone,
    count: 0
  })
  clearInterval(this.state.timer);

}
render(){
  return (
    <div className="App">
      <h1>Game-of-Life</h1>
      <Grid
        rows={this.rows}
        cols={this.cols}
        grid={this.state.grid}
        selectCell={this.selectCell}
      />
      
      <div className="buttons">
        <button onClick={this.delay}>Start</button>
        <button onClick={this.start}>Speed</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.clear}>Clear</button>
      </div>
    </div>
  );
}

}

function arrayClone(arr) {
return JSON.parse(JSON.stringify(arr));
}

export default Game;