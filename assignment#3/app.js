let name = 'yasir ali'
console.log("Name in Uppercase~~", name.toUpperCase()); //Name in upper case
console.log("Name in Lower case~~", name.toLowerCase()); //Name in lower case

let titleCase = name.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });

console.log("Name in Title case~~", titleCase); //Name in Title case
  