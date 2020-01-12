module.exports = {
    run: function(instance, args) {
        let condition = false
        try {
            eval("condition = (" + args[0] + ")")
        }catch{
            const chalk = require("chalk")
            console.log(chalk.red("Incorrect syntax, use:\n" + this.help))
        }
        if(condition) {
            instance.prompt()
            return true
        }else{
            instance.prompt()
            return false
        }
    },
    help: "if <a><operator><b> | Starts the [if] block. End using the end command"
}