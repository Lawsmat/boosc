const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const ora = require("ora")
const fs = require("fs")

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
        let canrun = true
        if(cmd == "") {
            canrun = false
            this.prompt()
        }

        // if(!fs.existsSync("./../apps/" + cmdName + ".js")) {
        //     canrun = false
        //     console.log(chalk.red("Command not found."))

        //     this.prompt()
        // }
        try {
            m = require('../apps/' + cmdName);
        } catch (error) {
            if(cmd != "end"){
                console.log(chalk.red("Command not found."))
            }
            this.prompt()
            if(process.env.BOOSC_DEBUG == "true") {
                console.error(error)
            }
        }
        if(m && canrun) {
            return m.run(this,cmdargs)
        }
    },
    prompt: function() {
        if(require("../index").isFileMode == false) {
            rl.question(chalk.bold(chalk.green(os.userInfo().username + "@" + os.hostname) + chalk.magenta(" $ ")), (cmd) => {
                this.run(cmd)
            });
        }
    }
}