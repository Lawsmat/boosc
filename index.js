#!/usr/bin/env node

// EXIT CONDITION
let exit = false

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const ora = require("ora")
const os = require("os")

clear();

console.log(
  chalk.blueBright(
    figlet.textSync('boosc.js', { horizontalLayout: 'full' })
  )
);
console.log(chalk.blue("==> Welcome to boosc.js <=="))
const spinner = ora('Getting ready...').start();

setTimeout(() => {
    spinner.succeed()
    setTimeout(() => {
        clear()
        setTimeout(() => {
            require("./js/ci").prompt()
        }, 100);
    }, 1000);
}, 1000);

(function wait () {
    if (!exit) setTimeout(wait, 1000);
 })();

module.exports = {
    exit: function() {
        exit = true
    }
}
