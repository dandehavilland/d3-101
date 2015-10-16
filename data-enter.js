var people = ['dan'];

function updatePeople() {
  var selection = d3.selectAll('h1');
  var join = selection.data(people);

  // new element
  var enter = join.enter();

  enter
    .append('h1')
      .text(String)
      .append('h2');

  enter
    .append('h2')
      .attr('data-type', 'person')
      .text(function(d, idx) {
        var elem = d3.select(this);
        var type = elem.attr('data-type');
        return `${d} is a ${type}`;
      });
}
