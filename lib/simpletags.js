
var itemId = 0;

function Item(data, tags) {
    var id = ++itemId;

    this.getId = function () { return id; }
}

function Engine() {
    var items = [];

    this.createItem = function (data, tags) {
        var item = new Item(data, tags);
        return item.getId();
    }
}

function createEngine() {
    return new Engine();
}

module.exports = {
    createEngine: createEngine
};