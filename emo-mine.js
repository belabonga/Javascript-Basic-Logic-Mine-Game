"use strict"

let MineGame = require("./index")

class EmoMine extends MineGame {
  constructor (height, width) {
    super (height, width) 
      this.miner = "☹️"
  }

  randomStamina() {
    return Math.floor(Math.random() * (15 - 10) ) + 10;
  }
  
}

// TEST CASE Mine Game Part 2 
let [height, width] = process.argv.slice(2)
const gameEmoMine = new EmoMine(height, width)
// gameEmoMine.play()