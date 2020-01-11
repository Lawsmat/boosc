#!/usr/bin/env node

require("dotenv").config()

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const ora = require("ora")
const os = require("os")
const fs = require("fs")
const readline = require("readline")

let fileMode = false

let cliArgs = process.argv.slice(2);

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
        require("./js/ci").prompt()
    }
}

if(fileMode == true) {
    if(fs.existsSync(cliArgs[0])) {
        const readInterface = readline.createInterface({
            input: fs.createReadStream(cliArgs[0]),
            console: false
        });
        readInterface.on('line', function(line) {
            require("./js/ci").run(line)
        });
        readInterface.on('close', function(line) {
            process.exit(0)
        });
    }else{
        console.log(chalk.red("File does not exist!"))
    }
}

module.exports = {
    isFileMode: fileMode
}

