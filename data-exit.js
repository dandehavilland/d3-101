//
// <h1>dan</h1>
// <h1>balint</h1>
//

var people = ['dan'];

function updatePeople() {
  var selection = d3.selectAll('h1');
  var join = selection.data(people);

  // new element
  var exit = join.exit();

  exit
    .text(function(d) {
      var name = d3.select(this).text();
      return `${name} has been deleted`;
    });
}
