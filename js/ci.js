const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const ora = require("ora")

const readline = require('readline');
const os = require("os")

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = {
    run: function(cmd) {
        let cmdargs = cmd.split(" ")
        let cmdName = cmdargs.shift()
        let m;
        try {
            m = require('../apps/' + cmdName);
        } catch (error) {
            console.log(chalk.red("Command not found."))
            this.prompt()
        }
        if(m) {
            m.run(this,cmdargs)
        }
    },
    prompt: function() {
        rl.question(chalk.bold(chalk.green(os.userInfo().username + "@" + os.hostname) + chalk.magenta(" $ ")), (cmd) => {
            this.run(cmd)
        });
    }
}