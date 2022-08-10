export default class Tool {
    canvas: HTMLCanvasElement;
    ctx;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.clearEvents();
    }

    clearEvents() {
        this.canvas.onmousedown = null;
        this.canvas.onmouseup = null;
        this.canvas.onmousemove = null;
    }
}
