var originalPeople = [{name: 'dan'}, {name: 'balint'}, {name: 'david'}];

var newPeople = [{name: 'steve'}, {name: 'balint'}, {name: 'david'}];

function updatePeople(people) {
  var selection = d3.selectAll('h1');
  var join = selection.data(people, function(d) { return d.name; });


  // new element
  join.enter()
    .append('h1')
      .attr('data-type', 'person')
      .text(function(d, idx) {
        var elem = d3.select(this);
        var type = elem.attr('data-type');
        return `${d.name} is a ${type}`;
      });


  join.exit()
    .transition()
    .duration(2000)
    .style('opacity', 0)
      .remove();
}

updatePeople(originalPeople);

setTimeout(function() {
  updatePeople(newPeople);
}, 5000);
