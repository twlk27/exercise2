function add(op1, op2) {
  var arr1 = str2array(op1)
  var arr2 = str2array(op2)
  var bigger = arr1.length > arr2.length ? arr1 : arr2
  var smaller = arr1.length > arr2.length ? arr2 : arr1
  for (var i = 0; i < bigger.length; i++) {
  	bigger[i] = +bigger[i] + (smaller[i] ? +smaller[i] : 0)
  }
  bigger = arrayShiftAdded(bigger)
  var rst = array2str(bigger)
  return rst
}

function str2array(op) {
  return op.split('').reverse()
}

function array2str(arr) {
  return arr.reverse().join('')
}

// ['7', '11', '9', '10'] -> ['7', '1', '0', '1', '1']
function arrayShiftAdded(arr) {
  var n = []
  var shiftAdd = 0
  arr.forEach(function(v, k) {
  	var _v = +v + shiftAdd
  	n.push(_v.toString().slice(-1))
  	shiftAdd = _v > 9 ? 1 : 0
  })
  shiftAdd && n.push('1')
  return n
}

module.exports = add