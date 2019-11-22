const rotations = {
  N: {
    R: 'E',
    L: 'W'
  },
  E: {
    R: 'S',
    L: 'N'
  },
  S: {
    R: 'W',
    L: 'E'
  },
  W: {
    R: 'N',
    L: 'S'
  }
}

export default class Probe {
  constructor (x, y, looking_at, commands, plateau) {
    this.x = parseInt(x)
    this.y = parseInt(y)
    this.looking_at = looking_at
    this.commands = commands
    this.plateau = plateau
  }
  land () {
    this.plateau.board[this.x][this.plateau.board.length - 1 - this.y] = this
  }
  move () {
    switch(this.looking_at) {
      case 'N':
        // lower bound
        if (this.y + 1 <= this.plateau.board.length) this.y = this.y + 1
        break

      case 'S':
        // lower bound
        if (this.y - 1 > 0) this.y = this.y - 1
        break

      case 'E':
        // lower bound
        if (this.x + 1 <= this.plateau.board.length) this.x = this.x + 1
        break

      case 'W':
        // lower bound
        if (this.x - 1 > 0) this.x = this.x - 1
        break

      default:
        break
    }
  }

  rotate (rotation) {
    this.looking_at = rotations[this.looking_at][rotation]
  }

  run () {
    this.commands.split('').forEach(command => {
      if (command === 'M') {
        this.move()
      } else {
        this.rotate(command)
      }
    })
  }
  report () {
    return `${this.x} ${this.y} ${this.looking_at}`
  }
}
