var o = require("mithril/ospec/ospec");

o.spec("math", function() {
    o("BAD MATH", function() {
        o("2" + "2").equals("22")
    })
});