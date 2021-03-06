import { expect } from 'chai'

import Probe from '../../src/classes/probe'
import Plateau from '../../src/classes/plateau'

describe('Probe test', () => {
  describe('Testing rotations', () => {

    describe('Rotation from North to Left', () => {
      let probe = new Probe(0, 0, 'N', 'L', [])
      probe.run()
      it('It should say West', () => {
        const direction = probe.looking_at
        expect(direction).to.equal('W')
      })
    })
    describe('Rotation from North to Right', () => {
      let probe = new Probe(0, 0, 'N', 'R', [])
      probe.run()
      it('It should say East', () => {
        const direction = probe.looking_at
        expect(direction).to.equal('E')
      })
    })

    describe('Rotation from East to Right', () => {
      let probe = new Probe(0, 0, 'E', 'R', [])
      probe.run()
      it('It should say South', () => {
        const direction = probe.looking_at
        expect(direction).to.equal('S')
      })
    })
    describe('Rotation from East to Left', () => {
      let probe = new Probe(0, 0, 'E', 'L', [])
      probe.run()
      it('It should say North', () => {
        const direction = probe.looking_at
        expect(direction).to.equal('N')
      })
    })

    describe('Rotation from South to Right', () => {
      let probe = new Probe(0, 0, 'S', 'R', [])
      probe.run()
      it('It should say West', () => {
        const direction = probe.looking_at
        expect(direction).to.equal('W')
      })
    })
    describe('Rotation from South to Left', () => {
      let probe = new Probe(0, 0, 'S', 'L', [])
      probe.run()
      it('It should say East', () => {
        const direction = probe.looking_at
        expect(direction).to.equal('E')
      })
    })

    describe('Rotation from West to Right', () => {
      let probe = new Probe(0, 0, 'W', 'R', [])
      probe.run()
      it('It should say North', () => {
        const direction = probe.looking_at
        expect(direction).to.equal('N')
      })
    })
    describe('Rotation from West to Left', () => {
      let probe = new Probe(0, 0, 'W', 'L', [])
      probe.run()
      it('It should say South', () => {
        const direction = probe.looking_at
        expect(direction).to.equal('S')
      })
    })
  })

  describe('Testing moves', () => {

    let plateau = new Plateau(5, 5)

    describe('Testing upper bounds', () => {
      describe('Loking North Moving', () => {
        let probe = new Probe(5, 5, 'N', 'M', plateau)
        probe.run()
        it('It should not move', () => {
          const report = probe.report()
          expect(report).to.equal('5 5 N')
        })
      })
      describe('Loking East Moving', () => {
        let probe = new Probe(5, 5, 'E', 'M', plateau)
        probe.run()
        it('It should not move', () => {
          const report = probe.report()
          expect(report).to.equal('5 5 E')
        })
      })
      describe('Loking South Moving', () => {
        let probe = new Probe(5, 5, 'S', 'M', plateau)
        probe.run()
        it('It should go on down', () => {
          const report = probe.report()
          expect(report).to.equal('5 4 S')
        })
      })
      describe('Loking West Moving', () => {
        let probe = new Probe(5, 5, 'W', 'M', plateau)
        probe.run()
        it('It should go one to the left', () => {
          const report = probe.report()
          expect(report).to.equal('4 5 W')
        })
      })
    })

    describe('Testing lower bounds', () => {
      describe('Loking North Moving', () => {
        let probe = new Probe(0, 0, 'N', 'M', plateau)
        probe.run()
        it('It should go one up', () => {
          const report = probe.report()
          expect(report).to.equal('0 1 N')
        })
      })
      describe('Loking East Moving', () => {
        let probe = new Probe(0, 0, 'E', 'M', plateau)
        probe.run()
        it('It should go one right', () => {
          const report = probe.report()
          expect(report).to.equal('1 0 E')
        })
      })
      describe('Loking South Moving', () => {
        let probe = new Probe(0, 0, 'S', 'M', plateau)
        probe.run()
        it('It should not move', () => {
          const report = probe.report()
          expect(report).to.equal('0 0 S')
        })
      })
      describe('Loking West Moving', () => {
        let probe = new Probe(0, 0, 'W', 'M', plateau)
        probe.run()
        it('It should not move', () => {
          const report = probe.report()
          expect(report).to.equal('0 0 W')
        })
      })
    })
  })
})
