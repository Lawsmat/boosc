function extractText(str){
    const matches = str.match(/"(.*?)"/);
    return matches
      ? matches[1]
      : str;
}
let database = require('../js/datastorage')
let chalk = require("chalk")
module.exports = {
    run: function(inst, args) {
        if(args[0] && args[1] == "=" && args[2]) {
            // Command probably looks like cmd name = blah
            let thing = [...args];
            thing.shift()
            thing.shift()
            let text = extractText(thing.toString().replace(/,/g," "))
            if(args[0].match(/^[a-z0-9]+$/i)) {
                database.setVariable(args[0],text)
            }else{
                console.log(chalk.red("Variable key must be alphanumeric."))
            }
            inst.prompt()
        }
    },
    help: "d <key> = <value> | Declares an environment variable."
}