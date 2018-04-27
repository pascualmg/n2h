const n2h = require('./n2h');

//x cada argv...
process.argv.slice(2).forEach(function (argument) {
  console.log(n2h(argument));
});
