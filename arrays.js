var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, item) {
  return [item, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, item) {
  arr.unshift(item)
  return [...arr, item]
}

function addElementToEndOfArray(arr, item) {
  return[...arr, item]
}

function destructivelyAddElementToEndOfArray(arr, item) {
  arr.push(item)
  return arr
}

function removeElementFromBeginningOfArray(arr, item) {
  arr.slice(1)
  return newArr
}

function destructivelyAddElementToBeginningOfArray(foo, 1) {
  arr.unshift(foo)
  return arr
}
