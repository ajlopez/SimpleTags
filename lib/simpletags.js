
var tags = ["h1", "h2", "div"];

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
        
        result += ">";
        
        for (var n in arguments) {
            argument = arguments[n];

            if (argument == null || typeof argument == "object")
                continue;
                
            result += argument;
        }
        
        result += "</" + name + ">";
        
        return result;
    };
}

