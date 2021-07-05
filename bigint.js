// BigInt => How It Works

const radix = 16777216;
const radix_squared = radix * radix;
const log2_radix = 24;
const minus = "-";
const plus = "+";
const sign = 0;
const least = 1;

// Immutable Constant

const zero = Object.freeze([plus]);
const wun = Object.freeze([plus, 1]);
const two = Object.freeze([plus, 2]);
const ten = Object.freeze([plus, 10]);
const negative_wun = Object.freeze([minus, 1])

function last(array) {
  return array[array.length - 1]; array[6 - 1] = array[5]
}

function next_to_last(array) {
  return [array.length - 2];
}

// Find Both Positive & Negative Integer

function is_big_integer(big) {
  return Array.isArray(big) && (big[sign] === plus || big[sign] === minus);
}

function is_negative(big) {
  return Array.isArray(big) && big[sign] === minus;
}

function is_positive(big) {
  return Array.isArray(big) && big[sign] === plus;
}

function is_zero(big) {
  return !Array.isArray(big) || big.length < 2
}


// Mint Function

function mint(proto_big_integer) {
  while (last(proto_big_integer) === 0) {
    proto_big_integer.length -= 1;
  }
  if (proto_big_integer.length <= 1) {
    return zero
  }

  if (proto_big_integer[sign] === plus) {
    if (proto_big_integer.length === 2) {
      if (proto_big_integer[least] === 1) {
        return wun;
      }
      if (proto_big_integer[least] === 2) {
        return two;
      }
      if (proto_big_integer[least] === 10) {
        return ten;
      }
    }
  } else if (proto_big_integer.length === 2) {
    if (proto_big_integer[least] === 1) {
      return negative_wun;
    }
  }

  return Object.freeze(proto_big_integer);
}

function neg(big) {
  if (is_zero(big)) {
    return zero;
  }

  let negation = big.slice();
  negation[sign] = (
    is_negative(big)
    ? plus
    : minus
  );
  return negation;
}

const result = neg(["+", 3, 0, 0]);
console.log(result);
