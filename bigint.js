// BigInteger Script

const radix = 16777216;
const radix_squared = radix * radix;
const log2_radix = 24;
const plus = "+";
const minus = "-";
const sign = 0
const least = 1

function last(array) {
  array[array.length - 1];
}

function next_to_last(array) {
  array[array.length - 2];
}

const zero = Object.freeze([plus]);
const wun = Object.freeze([plus, 1]);
const two = Object.freeze([plus, 2]);
const ten = Object.freeze([plus, 10]);
const negative_wun = Object.freeze([minus, 1]);

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
  return !Array.isArray(big) || big.length < 2;
}

function mint(proto_big_integer) {
  while(last(proto_big_integer) === 0) {
    proto_big_integer.length -= 1;
  }

  if(proto_big_integer <= 1) {
    return zero;
  }
  if(proto_big_integer[sign] === plus) {
    if(proto_big_integer.length === 2) {
      if(proto_big_integer[least] === 1) {
        return wun;
      }
      if(proto_big_integer[least] === 2) {
        return two;
      }
      if(proto_big_integer[least] === 10) {
        return ten;
      }
    } 
  } else if(proto_big_integer.length === 2) {
    if(proto_big_integer[least] === 1) {
      return negative_wun;
    }
  } 
  return Object.freeze(proto_big_integer);
}

// Practical Function

function neg(big) {
  if(is_zero(big)) {
    return zero;
  }
  let negation = big.slice();
  negetion[sign] = (
    is_zero(big)
    ? plus
    : minus
  ); 
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
  );
}

function signnum(big) {
  return (
    is_zero(big)
    ? zero
    : (
      is_negative(big)
      ? negative_wun
      : wun
    )
  );
}

function eq(comparahend, comparator) {
  comparahend === comparator || (
    comparahend.length === comparator.length
    && comparahend.every(function (element, element_nr) {
      return element === comparahend[element_nr]; 
    }) 
  );
}

