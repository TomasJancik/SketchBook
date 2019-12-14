var SketchBook = /** @class */ (function () {
    function SketchBook(target, navigation, tagname) {
        if (tagname === void 0) { tagname = "li"; }
        this.target = target;
        this.navigation = navigation;
        this.tagname = tagname;
        this.handleAddClicked = function (e) {
            console.log("add clicked");
        };
        SketchBook.addEl.addEventListener("click", this.handleAddClicked);
    }
    SketchBook.addEl = document.querySelector("#sketchAdd");
    return SketchBook;
}());
var sb = new SketchBook(document.querySelector("article"), document.querySelector("nav ul"));
