function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFoundWithIndex(i) {
  console.log("Found him at index " + i + '!');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFoundWithIndex);


function findWaldo(arr, found) {
  arr.forEach(function(element){
    if (element === 'Waldo') {
      found();
    }
  })
}
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);




