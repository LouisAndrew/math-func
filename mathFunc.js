
const func = higher => {

      for (let i = 1; i < 15; i++) {
            const erg = higher(i)
            console.log(`x=${i} ergebnis=${erg}`)
      }
}

const oneB = x => {
      
      const a = 1 - Math.cos(x)
      const b = x**2

      return a / b
}

const oneD = x => {

      const a = ( Math.sin(x) ) ** 2
      const b =  x**2 * ( 1 + Math.cos(x) )

      return a / b
}

const oneE = x => {

      const a = 2 / x**2
      const b = Math.sin( x / 2 )**2

      return a * b
}

const twoA = x => {

      const a = x
      const b = Math.sqrt(x + 1) - Math.sqrt(x)

      return a * b
}

const twoC = x => {

      const a = x
      const b = Math.sqrt(x + 1) + Math.sqrt(x)

      return a / b
}

func(twoC)