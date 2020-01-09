let chalk = require("chalk")
module.exports = {
    run: function(instance) {
        console.log(chalk.magenta("Exiting..."))
        require("../index").exit()
    },
    help: "exit | Exits boosc.js."
}