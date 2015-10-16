//
// <h1>dan</h1>
// <h1>balint</h1>
//

var people = ['dan', 'balint', 'david'];

function updatePeople() {
  var selection = d3.selectAll('h1');
  var join = selection.data(people);

  join.enter()
    .append('h1')
      .text(function(d) {
        console.log('enter appends david');
        return d;
      });

  // new element
  join
    .text(function(d) {
      var name = d3.select(this).text();
      return `${name} is one of the elements`;
    });


}

