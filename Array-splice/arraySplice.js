const months = [ 'Jan', 'March', 'April', 'June' ];
months.splice( 1, 0, 'Feb' );
// inserts at index 1
console.log( months );

months.splice( 4, 1, 'May' );
// replace 1 element at index 4
console.log( months );