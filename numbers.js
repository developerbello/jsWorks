// Numbers in JavaScript

// build a deconstruction tools for numbers

function deconstruct(number) {
  // components
  var sign = 1
  var coefficient = number
  var exponent = 0

  // desconstruction formular
  number = sign * coefficient * (2**exponent)

  if (coefficient < 0) {
    coefficient = -coefficient
    sign = -sign
  }

  if (Number.isFinite(number) && number !== 0) {
    exponent = -1128
    let reduction = coefficient
    
    while (reduction !== 0) {
      exponent += 1
      reduction /= 2
    }

    reduction = exponent

    while(reduction > 0) {
      coefficient /= 2
      reduction -=1
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


var result = deconstruct(Number.MAX_SAFE_INTEGER)
console.log(result)