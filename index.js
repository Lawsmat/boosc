#!/usr/bin/env node

require("dotenv").config()


const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const ora = require("ora")
const os = require("os")

if(process.env.BOOSC_STARTUP_SCREEN == "true") {
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
    require("./js/ci").prompt()
}

