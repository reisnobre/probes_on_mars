export default class Plateau {
  constructor (top, right) {
    this.board = this.makeBoard(top, right)
  }

  makeBoard (top, right) {
    var arr = []
    for (let i = 0; i < top; i++) {
      arr[i] = []
      for(let j = 0; j < right; j++) {
        arr[i][j] = 0
      }
    }
    return arr
  }

  printBoard () {
    console.log(this.board)
  }
}
