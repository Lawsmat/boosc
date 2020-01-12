function edit() {
    var cp = require("child_process");
    cp.exec(__dirname + "/../.env.txt"); // notice this without a callback..
    require("./ci").prompt()
}

module.exports = edit