module.exports = {
    run: function(instance,args) {
        var sleep = require('sleep');
        sleep.msleep(args[0])
        instance.prompt()
    },
    help: "wait <miliseconds> | Waits for the desired time."
}