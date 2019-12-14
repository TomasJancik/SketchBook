class SketchBook {
    private static addEl: Element = document.querySelector("#sketchAdd");

    private handleAddClicked = (e: Event): void => {
        console.log("add clicked");
    }

    public constructor(private target: Element, private navigation: Element, private tagname: string = "li") {
        SketchBook.addEl.addEventListener("click", this.handleAddClicked);
    }
}

const sb = new SketchBook(
    document.querySelector("article"),
    document.querySelector("nav ul"),
);
