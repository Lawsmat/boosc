module.exports = {
    run: function(instance,args) {
        console.log(args.toString().replace(/,/g," "))
        instance.prompt()
    },
    help: "print <text> | prints text to the console. Commas are not allowed."
}