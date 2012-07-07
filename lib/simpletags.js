
var tags = ["h1", "h2", "div", "br"];

for (var n in tags) {
    var name = tags[n];
    
    exports[name] = makeTag(name);
}

function makeTag(name) {
    return function() {
        if (!arguments || arguments.length == 0)
            return "<" + name + " />";
        
        var result = "<" + name;
        var argument;

        for (var n in arguments) {
            argument = arguments[n];
            
            if (typeof argument != "object")
                continue;
                
            for (var sname in argument) {
                result += " " + sname + "='" + argument[sname] + "'";
            }
        }
        
        var closed = false;
        
        for (var n in arguments) {
            argument = arguments[n];

            if (argument == null || typeof argument == "object")
                continue;
                
            if (!closed) {
                result += ">";
                closed = true;
            }
                
            result += argument;
        }
        
        if (closed)
            result += "</" + name + ">";
        else
            result += " />";
        
        return result;
    };
}

