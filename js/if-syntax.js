module.exports = {
    onIfLine: function(onLine,lineContents) {
        return require("./ci").run(lineContents)
    }
}