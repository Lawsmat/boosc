let wrap = require("word-wrap")
let database = require("../js/datastorage")
const chalk = require("chalk")
module.exports = {
    run: function(instance,args) {
        if(args[0] == "-v") {
            if(database.getVariable(args[1])) {
                wrap(console.log(database.getVariable(args[1])))
            }else{
                console.log(chalk.red("Error: No variable named '" + args[1] + "' was found."))
            }
        } else {
            wrap(console.log(args.toString().replace(/,/g," ")))
        }
        instance.prompt()
    },
    help: "print <text> OR print -v <variable> | prints text or a variable to the console. Commas are not allowed."
}