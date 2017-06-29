var words = ["ground", "control", "to", "major", "tom"];

function map(words, f){
  result = [];
  // change code here
  words.forEach(function(word) {
    result.push(f(word))
  }
  );
  console.log(result);
}

////// or this ////////
// function map(words, f){
//   result = [];
//   // change code here
//   for (i in words) {
//     result.push(f(words[i]))
//   }
//   console.log(result)
// }


// keep the same for now
map(words, function(word) {
  return word.length;
});