
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

exports.h1 = h1;

