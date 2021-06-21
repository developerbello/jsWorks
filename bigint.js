// ["0", Number.MAX_SAFE_INTEGER, ...]

const radix = 16777216
const radix_squared = radix * radix
const log2_radix = 24
const plus = "+"
const minus = "-"
const least = 1

const zero = Object.freeze([plus])
const wun = Object.freeze([plus, 1])
const two = Object.freeze([plus, 2])
const ten = Object.freeze([plus, 10])
const negative_wun = Object.freeze([minus, 1])

function last(array) {
  return array[array.length -1]
}

function next_to_last(array) {
  return array[array.length - 2]
}

// Function used to discover big integer negative and positive

function is_big_integer(big) {
  return Array.isArray(big) && big[sign] === plus || big[sign] === minus
}

function is_negative(big) {
  return Array.isArray(big) && big[sign] === minus
}

function is_positive(big) {
  return Array.isArray(big) && big[sign] === plus
}

function is_zero(big) {
  return Array.isArray(big) && big.length < 2
}

function mint(proto_big_integer) {
  while(last(proto_big_integer) === 0) {
    proto_big_integer.length -= 1
  }
  if(proto_big_integer <= 1) {  
    return zero
  }
  if(proto_big_integer[sign] === plus) {
    if(proto_big_integer.length === 2) {
      if(proto_big_integer[least] === 1) {
        return 1
      }
      if(proto_big_integer[least] === 2) {
        return 2
      }
      if(proto_big_integer[least] === 10) {
        return 10
      }
    }
  } else if(proto_big_integer.length === 2) {
    if(proto_big_integer[least] === 1) {
      return negative_wun
    }
  }

  return Object.freeze(proto_big_integer)
}

// Negation, absolute value, sign extration

function neg(big) {
  if(is_zero(big)) {
    return zero
  }

  let negation = big.slice()
  negation[sign] = (
    is_negative(big) 
    ? plus
    : minus
  )

  return mint(negation)
}

function abs(big) {
  return (
    is_zero(big)
    ? zero
    : (
      is_negative(big)
      ? neg(big)
      : big
    )
  )
}

function signum(big) {
  return (
    is_zero(big)
    ? zero
    : (
      is_negative(big)
      ? negative_wun
      : wun
    )
  )
}

function eq(comprehend, comparator) {
  return comprehend === comparator || (
    comprehend.length === comparator.length
    && comprehend.every(function (element, element_nr) {
      return element === comparator[element_nr]
    })
  )
}
