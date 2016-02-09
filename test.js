var assert = require('assert');
var check = require('./');

assert( check("a(b)") === true );
assert( check("[{}]") === true );
assert( check("[(]") === false );
assert( check("[(])") === false );
assert( check("}{") === false );
assert( check("z([{}-()]{a})") === true );
assert( check("") === true );

console.log("All tests passed");
