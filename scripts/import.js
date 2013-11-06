var fs = require( "fs" );

function importNames( inputFile, outputFile ) {
    var input   = fs.readFileSync( __dirname + "/" + inputFile ),
        names   = String( input ).split( "\n" ),
        output;

    names = names
        .map( function( name ) {
            name = name.trim();
            name = name.charAt( 0 ).toUpperCase() + name.substr( 1 ).toLowerCase();
            return name;
        }).filter( function( name ) {
            return name !== "";
        });

    output = "module.exports = [\n    '" + names.join( "',\n    '" ) + "'\n];\n";

    fs.writeFileSync( __dirname + "/" + outputFile, output );
}

importNames( "../data/male-names.txt", "../lib/male_names.js" );
importNames( "../data/female-names.txt", "../lib/female_names.js" );