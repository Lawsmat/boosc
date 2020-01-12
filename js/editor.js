function edit() {
    require("open")(__dirname + "/../boosc_config.txt")
    require("./ci").prompt()
}

module.exports = edit