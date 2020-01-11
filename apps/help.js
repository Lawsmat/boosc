const apps = require("../apps")
const chalk = require("chalk")
let wrap = require("word-wrap")

module.exports = {
    isHelp: true,
    run: function(instance,args) {
        console.log(chalk.blue("===> ") + chalk.magenta("Help menu") + chalk.blue(" <==="))
        let everyOther = true
        Object.keys(apps).forEach(function (item) {
            let mod = apps[item]
            if(item != "help" && item != "run") {
                if(everyOther) {
                    everyOther = false
                    wrap(console.log(chalk.cyan(mod.help)))
                }else{
                    everyOther = true
                    wrap(console.log(chalk.blue(mod.help)))
                }
            }
        });
        instance.prompt()
    },
}