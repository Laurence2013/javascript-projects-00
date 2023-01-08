/*
 * Standard built-in objects >> Array >> Array.prototype.entries()
 */
const colours = ['blue', 'black', 'green', 'orange', 'purple', 'red', 'yellow'];
const colourEntries = colours.entries();

for(const [key, val] of colourEntries){
	console.log(key, val);
}
