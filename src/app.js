import Plateau from './classes/plateau'
import Probe from './classes/probe'
import fs from 'fs'

// const plateau = new Plateau(5, 5)
let fileData

try {
  fileData = fs.readFileSync('src/in.txt', 'utf8')
} catch(e) {
    console.log('Error:', e.stack);
}

let data = fileData.split('\n')
let boardSize = data.splice(0, 1)[0].split('')
let plateau = new Plateau(boardSize[0], boardSize[1])

let probes = []
for (let i = 0; i < data.length; i += 2) {
  let probeData = {
    looking_at: data[i].split(' ').pop(),
    x: data[i].split('')[0],
    y: data[i].split('')[1],
    commands: data[i + 1]
  }
  let probe = new Probe(probeData.x, probeData.y, probeData.looking_at, probeData.commands, plateau)
  probes.push(probe)
}

probes.forEach(probe => {
  probe.land()
  probe.run()
  let log = probe.report()
  fs.appendFile('src/out.txt', `${log}\n`, (err) => {
    if (err) throw err;
    console.log('Probe log saved')
  })
})
