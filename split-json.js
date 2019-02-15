if( process.argv.length < 3 ) {
    console.log( 'target file path is required.' );
    process.exit( 1 );
}

var target = process.argv[ 2 ];
console.log( 'file: ' + target );

var fs = require( 'fs' );
var newFileName = target.replace( ".json", "" );
fs.readFile( target, function ( err, data ) {
  if (err) throw err;

  var jsonArray = JSON.parse( data ),
      i = 1;

  jsonArray = jsonArray.records;

  while( jsonArray.length !== 0 ) {
    var fileName = newFileName + '-' + i + ".json";
    var newArray = jsonArray.splice( 0, 200 );
    var newObj = { records: newArray };
    fs.writeFileSync( fileName, JSON.stringify( newObj ) );
    console.log( fileName );
    i++;
  }
})
