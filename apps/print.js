let wrap = require("word-wrap")
let database = require("../js/datastorage")
const chalk = require("chalk")
module.exports = {
    run: function(instance,args) {
        if(args[0] == "-v") {
            if(database.getVariable(args[1])) {
                console.log(wrap(database.getVariable(args[1])))
            }else{
                console.log(chalk.red("Error: No variable named '" + args[1] + "' was found."))
            }
        } else {
            console.log(wrap(args.join(" ")))
        }
        instance.prompt()
    },
    help: "print <text> OR print -v <variable> | prints text or a variable to the console. Commas are not allowed."
}