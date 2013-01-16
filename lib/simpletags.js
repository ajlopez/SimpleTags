
var itemId = 0;

function ValueDimension() {
    this.values = [];
}

ValueDimension.prototype.getValue = function (value) {
    var index = this.values.indexOf(value);
    if (index >= 0)
        return this.values[index];
    this.values.push(value);
    return value;
};

function Item(data, tags) {
    var id = ++itemId;

    this.getId = function () { return id; }

    this.asObject = function () {
        return { id: id, data: data, tags: tags.slice() };
    };

    this.hasTags = function (taglist) {
        for (var n in taglist) {
            var tagitem = taglist[n];

            if (typeof tagitem === 'object') {
                var key = Object.keys(tagitem)[0];
                var value = tagitem[key];
                var hastag = false;

                for (var m in tags) {
                    var tag = tags[m];
                    if (tag[key] === value) {
                        hastag = true;
                        break;
                    }
                }

                if (!hastag)
                    return false;
            }
            else if (tags.indexOf(tagitem) < 0)
                return false;
        }

        return true;
    }
}

function tagIsValid(tag) {
    if (!tag)
        return false;

    if (typeof tag === 'string')
        return true;

    if (typeof tag !== 'object')
        return false;

    var keys = Object.keys(tag);

    if (!keys || keys.length != 1)
        return false;

    if (!tag[keys[0]])
        return false;

    return true;
}

function objectAsTags(obj) {
    var tags = [];
    var tag;

    for (var n in obj) {
        tag = { };
        tag[n] = obj[n];
        tags.push(tag);
    }

    return tags;
}

function Engine() {
    var items = [];
    var strings = new ValueDimension();

    this.createItem = function (data, tags) {
        if (!Array.isArray(tags) && typeof tags === 'object')
            tags = objectAsTags(tags);

        var ntags = [];

        for (var n in tags) {
            var tag = tags[n];
            if (!tagIsValid(tag))
                throw "invalid tag";
            if (typeof tag === 'string')
                ntags.push(strings.getValue(tag));
            else
                ntags.push(tag);
        }

        var item = new Item(data, ntags);
        var id = item.getId();
        items[id] = item;
        return id;
    }

    this.getItemById = function (id) {
        var item = items[id];

        if (item)
            return item.asObject();

        return null;
    }

    this.getItems = function (tags) {
        var result = [];

        items.forEach(function (item) {
            if (item.hasTags(tags))
                result.push(item.asObject());
        });

        return result;
    }
}

function createEngine() {
    return new Engine();
}

module.exports = {
    createEngine: createEngine
};

