import {Sketch} from "./Sketch.js";

export class SketchBook {
    private static addEl: Element = document.querySelector("#sketchAdd") as Element;
    private static CONSTANTS = {
        CSS: {
            sketch_class: "sketch",
        }
    }
    private sketches: Sketch[] = [];

    private addSketchElement(sketch: Sketch): void {
        const el: Element = document.createElement(this.tagname);
        el.textContent = sketch.name;
        el.className = SketchBook.CONSTANTS.CSS.sketch_class;

        this.target.appendChild(el);
    }

    private handleAddClicked = (e: Event): void => {
        this.sketches.push( new Sketch("Sketch " + String(this.sketches.length + 1)));

        this.render();
        this.editSketch(this.sketches.length - 1);
    }

    private removeAllSketchElement(): void {
        document.querySelectorAll(this.tagname + "." + SketchBook.CONSTANTS.CSS.sketch_class).forEach((e: Element) => {
            e.remove();
            console.log("remove")
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
