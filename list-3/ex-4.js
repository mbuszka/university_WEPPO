function createFs(n) { // tworzy tablicę n funkcji
  var fs = []
  for ( var i=0; i<n; i++ ) {
    fs[i] = (function () {
      var j = i
      return function() {
        return j;
      }
    })()
  }
  return fs;
}
var myfs = createFs(10);
console.log( myfs[0]() ); // zerowa funkcja miała zwrócić 0
console.log( myfs[2]() ); // druga miała zwrócić 2
console.log( myfs[7]() );
