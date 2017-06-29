var countdownGenerator = function (x) {
  /* your code here */
  var tminus = [];
  while (x > 0) {
    tminus.push('T-minus ' + x +"...")
    x -= 1;
  }
  var list = tminus.concat(['Blast Off!', 'Rockets already gone, bub!', 'Rockets already gone, bub!'])

  var count = 0;

  return function() {
    console.log(list[count++])
  }
};

var countdown = countdownGenerator(3);
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();

