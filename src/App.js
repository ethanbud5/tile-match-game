import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import tiles from "./tiles.json";
import Tiles from "./Tiles";

class App extends Component {
  constructor(){
    super()
    this.state = {
      tiles:this.shuffle(tiles),
      firstTile:""
    }
    this.tileClick = this.tileClick.bind(this)
    this.shuffleTiles = this.shuffleTiles.bind(this)
    this.shuffle = this.shuffle.bind(this)
  }
   shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  tileClick(clkdTile){
    let {firstTile} = this.state;
    if(firstTile === ""){
      //TODO change color of clicked tile
      document.getElementById(clkdTile.id).style.background = clkdTile.color;
      this.setState({firstTile:clkdTile})
    }
    else if(firstTile !== ""){
      document.getElementById(clkdTile.id).style.background = clkdTile.color;
      setTimeout(()=>{
      if(firstTile.color === clkdTile.color){
        alert("You've found a match!");
      }
      else{
        //alert("Sorry, try again.")
        document.getElementById(clkdTile.id).style.background = "gray";
        document.getElementById(firstTile.id).style.background = "gray";
      }
      this.setState({firstTile:""})
    },300)
  }
  }
  shuffleTiles(){
    let newShuffled = this.shuffle(this.state.tiles);
    newShuffled.map(tile=>{
      document.getElementById(tile.id).style.background = "gray";
    })
    this.setState({tiles:newShuffled})
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tile Match Game</h1>
          <h3>Click on the tiles and try to get a match.</h3>
        </header>
        <button onClick={this.shuffleTiles}>
          Shuffle and Reset!
        </button>
        <Tiles tiles={this.state.tiles} tileClick={this.tileClick}/>
      </div>
    );
  }
}

export default App;
