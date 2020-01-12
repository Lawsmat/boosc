// Registered apps
module.exports = {
    help: require("./help"),
    print: require("./print"),
    exit: require("./exit"),
    d: require("./d"),
    wait: require('./wait'),
    options: require("./options"),
    run: function() {
        console.log("Internal error.")
        require("../js/ci").prompt()
    }
}