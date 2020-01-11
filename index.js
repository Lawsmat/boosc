#!/usr/bin/env node

require("dotenv").config()

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const ora = require("ora")
const os = require("os")
const fs = require("fs")
const readline = require("readline")

const yargs = require("yargs")

let fileMode = false

// yargs.alias("f","file")

let cliArgs = yargs.argv._

if(cliArgs[0]) {
    // It must be a file! Executable reading time, grab your reading glasses!
    fileMode = true
}


if(process.env.BOOSC_STARTUP_SCREEN == "true" && fileMode == false) {
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
}
else {
    if(fileMode == false) {
        setTimeout(() => {
            require("./js/ci").prompt()
        },100)
    }
}

let instantExit = true

if(fileMode == true) {
    if(fs.existsSync(cliArgs[0])) {
        const readInterface = readline.createInterface({
            input: fs.createReadStream(cliArgs[0]),
            console: false
        });
        readInterface.on('line', function(line) {
            if(line == "exit") {
                instantExit = false
            }
            require("./js/ci").run(line)
        });
        readInterface.on('close', function(line) {
            if(instantExit == true) {
                process.exit(0)
            }
        });
    }else{
        console.log(chalk.red("File does not exist!"))
    }
}

module.exports = {
    isFileMode: fileMode
}

