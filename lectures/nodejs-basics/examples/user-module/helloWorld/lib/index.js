var colors = require('ansicolors');

function helloWorld() {
    console.log(colors.blue("hello world"));
}

module.exports = helloWorld;