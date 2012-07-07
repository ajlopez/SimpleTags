
var tags = ["html", "head", "body", "header", "footer",
                           "p", "div", "span", "table", "tr", "td",
                           "ul", "ol", "li", "center", "dd", "dl",
                           "dt", "i", "b", "em", "strong", "title", "label",
                           "pre", "script", "style", "a", "form", "textarea",
                           "select", "option", "article", "section", "code",
                           "abbr", "acronym", "address", "bdo", "address",
                           "big", "tt", "small", "blockquote", "button",
                           "caption", "dfn", "cite", "code", "samp", "kbd",
                           "var", "colgroup", "del", "ins", "dir", "fieldset",
                           "legend", "frameset", "iframe", "noframes",
                           "noscript", "object", "optgroup", "q","sub", "sup",
                           "thead", "tfoot", "tbody"
                           , // added tags
                           "h1", "h2", "h3", "h4", "h5", "h6"                           
                           , // single tags
                           "meta", "br", "hr",
                              "link", "input", "img",
                              "base", "col", "frame",
                              "param"
                           ];

for (var n in tags) {
    var name = tags[n];
    
    exports[name] = makeTag(name);
}

exports.exportsTo = function(target) {
    for (var n in tags) {
        var name = tags[n];
    
        target[name] = this[name];
    }
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

