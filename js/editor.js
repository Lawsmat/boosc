function edit() {
    var cp = require("child_process");
    cp.exec(__dirname + "/../boosc_config.txt");
    require("./ci").prompt()
}

module.exports = edit