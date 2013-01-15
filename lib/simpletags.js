
var itemId = 0;

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

function Engine() {
    var items = [];

    this.createItem = function (data, tags) {
        for (var n in tags) {
            var tag = tags[n];
            if (!tagIsValid(tag))
                throw "invalid tag";
        }

        var item = new Item(data, tags.slice(0));
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

