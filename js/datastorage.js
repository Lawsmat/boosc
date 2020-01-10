let database = {
    vars: {}
}
module.exports = {
    getValue: function(key) {
        return database[key]
    },
    setValue: function(key,value) {
        database[key] = value
    },
    setVariable: function(key,value) {
        database.vars[key] = value
    },
    getVariable: function(key) {
        return database.vars[key]
    },
}