"use strict"
let MineGame = require("./index")

class DangerousMine extends MineGame {
  constructor (height, width, miner, money, diamond, stamina, position) {
    super (height, width, miner, money, diamond, stamina, position) 
      this.miner = "☺"
      this.bomb = this.bombPosition()
  }

  randomStamina() {
    return Math.floor(Math.random() * (20 - 10) ) + 10;
  }

  bombPosition() {
    let randomHeight = Math.floor(Math.random() * ((this.height-1) - 0) ) + 0
    let randomWidth = Math.floor(Math.random() * ((this.width-1) - 0) ) + 0
    return [randomHeight, randomWidth]
  }

  generateBoard() {
    // BOMB POSITION
    let z = this.bomb[0]
    let a = this.bomb[1]

    let arr = [];
    for (let i = 0; i < this.height; i++) {
      arr.push([])
      for (let j = 0; j < this.width; j++) {
        let random = Math.random()
          if (random === 0 || random <= 0.8) {
            arr[i].push(" ")
          } else if (random > 0.8 && random < 0.9) {
            arr[i].push("$")
          } else if (random >= 0.9 && random < 1) {
            arr[i].push("♦︎")
          }
      }
    }
    arr[z][a] = "⌖"
    return arr
  }


  play() {
    // MINER START POSITION
    let x = this.position[0]
    let y = this.position[1]

    let height = this.height
    let width = this.width

    // VALIDATION
    if (this.valid()) {
      let board = this.generateBoard(); 
      let flag = false

      // STAMINA LOOPING
      for (let i = this.stamina; i >= 0; i--) {
        this.clearScreen()
        // BOOM BOOM
        if (board[x][y] === "⌖") {
          console.log("BOOM!! BOOM!! BOOM!!")
          flag = true
        }
        
        // SHOWING ROW AND COLUMN COUNTER
        console.log(`Position row ${x} and column ${y}`)
  
        
        // ADD MONEY & DIAMOND $ ♦︎ COUNTER 
        if (board[x][y] === "$") {
          this.money++
        } else if (board[x][y] === "♦︎") {
          this.diamond++
        }
        
        
        // ADD MINER TO EMPTY
        board[x][y] = this.miner
        
        
        // MAKE BOARD SEPERATED
        for (let j in board) {
          console.log(` | ${board[j].join(' | ')} |`)
        }

        // STOP and SHOW END INFO
        if (x === height-1 && y=== width-1) {
          console.log(this.info())
          break;
        }
        
        // RESET THE MINER
        board[x][y] = " "
        
        
        // COUNTER ROW AND COLUMN
        if (y < this.width - 1) {
          y++
        } else if (x < this.height - 1) { // CHANGE INDEX 
          x++
          // RESET COLUMN COUNTER
          y = 0
        }
        
        // SHOW STAMINA MONEY DIAMOND
        console.log(this.info())
        
        // FLAGGING
        if (flag === true) {
          return
        }

        // DECREASING STAMINA EVERY LOOP 
        this.stamina--
        this.sleep(1000)
      }
    }
  }
}

// TEST CASE Mine Game Part 2 
let [height, width] = process.argv.slice(2)
const gameDangerousMine = new DangerousMine(height, width)
gameDangerousMine.play()
