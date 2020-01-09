const apps = require("../apps")
const chalk = require("chalk")
module.exports = {
    isHelp: true,
    run: function(instance,args) {
        console.log(chalk.blue("===> ") + chalk.magenta("Help menu") + chalk.blue(" <==="))
        let everyOther = true
        Object.keys(apps).forEach(function (item) {
            let mod = apps[item]
            if(item != "help") {
                if(everyOther) {
                    everyOther = false
                    console.log(chalk.cyan(mod.help))
                }else{
                    everyOther = true
                    console.log(chalk.blue(mod.help))
                }
            }
        });
        instance.prompt()
    },
}