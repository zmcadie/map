var words = ["ground", "control", "to", "major", "tom"];

function map(array, cb) {
  var newArray = []
  array.forEach(function(item) {
    newArray.push(cb(item))
  });
  return newArray
};

map(words, function(word) {
  return word.length;
});