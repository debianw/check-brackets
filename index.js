var opened = ['(', '{', '['];
var closed = [')', '}', ']'];

function check (str) {
  var openings = [];
  var letters = str.split("");
  var l;

  for (var i=0, len=letters.length; i < len; i++) {
    l = letters[i];
    if (opened.indexOf(l) !== -1) openings.push(l);

    if (closed.indexOf(l) !== -1) {
      if (opened.indexOf(openings.pop()) !== closed.indexOf(l)) return false;
    }
  }
  return (openings.length === 0);
}

module.exports = check;
