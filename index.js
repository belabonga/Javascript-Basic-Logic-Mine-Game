"use strict"

class MineGame {
  #position
  constructor(height, width) {
    this.height = height
    this.width = width
    this.miner = "☻"
    this.money = 0
    this.diamond = 0
    this.stamina = this.randomStamina()
    this.#position = this.randomStartPosition()
  }

  randomStamina() {
    return Math.floor(Math.random() * (10 - 5) ) + 5;
  }

  valid() {
    if (this.height > 2 && this.height < 8) {
      if (this.width > 2 && this.width < 8) {
        return true
      } else {
        console.log("Width tidak memenuhi requirement")
        return false
      }
    } else {
      console.log("Height tidak memenuhi requirement")
      return false
    }
  }

  // MINER COORDINATE
  randomStartPosition() {
    let randomHeight = Math.floor(Math.random() * ((this.height-1) - 0) ) + 0
    let randomWidth = Math.floor(Math.random() * ((this.width-1) - 0) ) + 0
    this.position = [randomHeight, randomWidth]
  }


  // RANDOMIZE MONEY & DIAMOND
  generateBoard() {
    // let result = []
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
    return arr
  }


  // MAIN CLASS
  play() {
    let x = this.position[0]
    let y = this.position[1]

    let height = this.height
    let width = this.width

    // VALIDATION
    if (this.valid()) {
      let board = this.generateBoard(); 

      // STAMINA LOOPING
      for (let i = this.stamina; i > 0; i--) {
        // DECREASING STAMINA EVERY LOOP 
        this.stamina--

    
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
        this.sleep(1000)
        this.clearScreen()
      }
    }
  }


  // STAMINA, MONEY, & DIAMOND COUNTER
  info(){
    return `stamina ${this.stamina} | money : ${this.money} | diamond : ${this.diamond}`
  }

  sleep(milliseconds) {
    let start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

  clearScreen() {
    // Un-comment this line if you have trouble with console.clear();
    // return process.stdout.write('\033c');
    console.clear();
  }
}

// TEST CASE MINE GAME PART 1

// Release 0
// const mineGame1 = new MineGame(4, 5);
// console.log(mineGame1);
/* output
MineGame {
  height: 4,
  width: 5,
  miner: '☻',
  money: 0,
  diamond: 0,
  stamina: 5,
  position: [ 0, 3 ]
}
*/


// Release 1
// const mineGame2 = new MineGame(1, 8);
// console.log(mineGame2.valid());
// // output : Height tidak memenuhi requirement
// const mineGame3 = new MineGame(2, 9);
// console.log(mineGame3.valid());
// // output : Width tidak memenuhi requirement


// Release 2
// const mineGame = new MineGame(4, 5);
// console.log(mineGame.position)
// contoh hasil random [ 4, 3 ] (gunakan getter buat juga setter)


// Release 3
// const mineGame = new MineGame(4, 5);
// console.log(mineGame.generateBoard())
/* output:
[
  [ ' ', ' ', '♦︎', '$', ' ' ],
  [ '$', ' ', ' ', ' ', ' ' ],
  [ '♦︎', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', ' ', ' ' ]
]
*/


// Release 4 s/d 6  (gunakan argv)
let [height, width] = process.argv.slice(2)
const game = new MineGame(height, width);
// game.play()


// EXPORT

module.exports = MineGame