// Numbers in JavaScript

// build a deconstruction tools for numbers with E6+ Syntax

const deconstructE6Plus = (number) => {
  // components
  let [sign, coefficient, exponent] = [1, number, 0]

  number = sign * coefficient * (2**exponent)

  if (number < 0) {
    coefficient = -coefficient
    sign = -1
  }
  
  if (Number.isFinite(number) && number !== 0) {
    exponent = -1128
    let reduction = coefficient
    
    while (reduction !== 0) {
      exponent += 1
      reduction /= 2
    }

    reduction = exponent
    while (reduction > 0) {
      coefficient /= 2
      reduction -= 1
    }
    
    while (reduction < 0) {
      coefficient *= 2
      reduction += 1
    }
  }

  return {
    sign,
    coefficient,
    exponent,
    number
  }
}

// build a deconstruction tools for numbers

// function deconstruct(number) {
//   // components
//   var sign = 1
//   var coefficient = number
//   var exponent = 0

//   // desconstruction formular
//   number = sign * coefficient * (2**exponent)

//   if (coefficient < 0) {
//     coefficient = -coefficient
//     sign = -sign
//   }

//   if (Number.isFinite(number) && number !== 0) {
//     exponent = -1128
//     let reduction = coefficient
    
//     while (reduction !== 0) {
//       exponent += 1
//       reduction /= 2
//     }

//     reduction = exponent

//     while(reduction > 0) {
//       coefficient /= 2
//       reduction -=1
//     }

//     while (reduction < 0) {
//       coefficient *= 2
//       reduction += 1
//     }
//   }

//   return {
//     sign,
//     coefficient,
//     exponent,
//     number
//   }
// }


var result = deconstructE6Plus(Number.MAX_SAFE_INTEGER)
console.log(result)
