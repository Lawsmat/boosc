const apps = require("../apps")
const chalk = require("chalk")
module.exports = {
    isHelp: true,
    run: function(instance,args) {
        console.log(chalk.blue("===> ") + chalk.magenta("Help menu") + chalk.blue(" <==="))
        Object.keys(apps).forEach(function (item) {
            let mod = apps[item]
            if(item != "help") {
                console.log(item + " | " + mod.help)
            }
        });
        instance.prompt()
    },
}