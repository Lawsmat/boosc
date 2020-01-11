// Registered apps
module.exports = {
    help: require("./help"),
    print: require("./print"),
    exit: require("./exit"),
    d: require("./d"),
    wait: require('./wait'),
    run: function() {
        console.log("Internal error.")
    }
}