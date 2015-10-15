var people = ['dan'];

function updatePeople() {
  var selection = d3.selectAll('h1')
  var join = selection.data(people);

  // new element
  join.enter()
    .append('h1')
    .attr('data-name', String)
    .text(function(d, idx) {
      return d;
    });
}

