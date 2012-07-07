
var tags = ["h1", "h2"];

for (var n in tags) {
    var name = tags[n];
    
    exports[name] = makeTag(name);
}

function makeTag(name) {
    return function() {
        if (!arguments || arguments.length == 0)
            return "<" + name + " />";
        
        var result = "<" + name + ">";
        
        for (var n in arguments) {
            var argument = arguments[n];
            result += argument;
        }
        
        result += "</" + name + ">";
        
        return result;
    };
}

function h1()
{
    if (!arguments || arguments.length == 0)
        return "<h1 />";
    
    var result = "<h1>";
    
    for (var n in arguments) {
        var argument = arguments[n];
        result += argument;
    }
    
    result += "</h1>";
    
    return result;
}


