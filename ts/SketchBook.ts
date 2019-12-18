interface Sketch {
    name: string;
    text?: string;
}

class SketchBook {
    private static addEl: Element = document.querySelector("#sketchAdd") as Element;
    private sketches: Sketch[] = [];

    private addSketchElement(sketch: Sketch): void {
        const el: Element = document.createElement(this.tagname);
        el.textContent = sketch.name;

        this.target.appendChild(el);
    }

    private handleAddClicked = (e: Event): void => {
        this.sketches.push({
            name: "New Sketch " + this.sketches.length + 1,
        });

        this.render();
        this.editSketch(this.sketches.length - 1);
    }

    private removeAllSketchElement(): void {
        document.querySelectorAll(this.tagname + ".sketch").forEach((e: Element) => {
            e.remove();
        });
    }

    public constructor(private target: Element, private navigation: Element, private tagname: string = "li") {
        SketchBook.addEl.addEventListener("click", this.handleAddClicked);
    }

    public editSketch(id: number):void {
        console.log(id, this.sketches[id]);
    }

    public render(): void {
        this.removeAllSketchElement();
        this.sketches.forEach((sketch: Sketch) => {
            this.addSketchElement(sketch);
        });
    }
}

const sb = new SketchBook(
    document.querySelector("article") as Element,
    document.querySelector("nav ul") as Element,
);
