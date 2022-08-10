import Tool from "./Tool";

export default class Brush extends Tool {
    mouseDown: boolean;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        console.log("created a new brush");
        this.mouseDown = false;
        this.listener();
    }

    listener() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    }

    mouseDownHandler(e: MouseEvent) {
        this.mouseDown = true;
        this.ctx?.beginPath();
        this.ctx?.moveTo(
            e.pageX - (e.target as HTMLCanvasElement).offsetLeft,
            e.pageY - (e.target as HTMLCanvasElement).offsetTop
        );
    }

    mouseUpHandler(e: MouseEvent) {
        this.mouseDown = false;
    }

    mouseMoveHandler(e: MouseEvent) {
        if (this.mouseDown) {
            this.draw(
                e.pageX - (e.target as HTMLCanvasElement).offsetLeft,
                e.pageY - (e.target as HTMLCanvasElement).offsetTop
            );
        }
    }

    draw(x: number, y: number) {
        this.ctx?.lineTo(x, y);
        this.ctx?.stroke();
        console.log("draw");
    }
}
