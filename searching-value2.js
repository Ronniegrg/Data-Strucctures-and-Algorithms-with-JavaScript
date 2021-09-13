let names = [ "David","Mike", "Cynthia", "Raymond", "Clayton","Mike", "Jennifer" ];
let name = "Mike";
const firstPos = names.indexOf( name );
console.log( `First found ${ name } at position ${ firstPos }` );
const lastPos = names.lastIndexOf( name );
console.log( `Last found ${ name } at position ${ lastPos }` );
