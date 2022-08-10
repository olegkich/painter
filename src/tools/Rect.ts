import Tool from "./Tool";

export default class Rect extends Tool {
    mouseDown: boolean;
    startX: number | null;
    startY: number | null;

    saved: string;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        console.log("created a new Rect tool");
        this.mouseDown = false;

        this.startX = null;
        this.startY = null;
        this.saved = "";
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

        this.startX = e.pageX - (e.target as HTMLCanvasElement).offsetLeft;
        this.startY = e.pageY - (e.target as HTMLCanvasElement).offsetTop;

        this.saved = this.canvas.toDataURL();
    }

    mouseUpHandler(e: MouseEvent) {
        this.mouseDown = false;
    }

    mouseMoveHandler(e: MouseEvent) {
        if (this.mouseDown) {
            let currentX = e.pageX - (e.target as HTMLCanvasElement).offsetLeft;
            let currentY = e.pageY - (e.target as HTMLCanvasElement).offsetTop;
            let width = currentX - this.startX!;
            let height = currentY - this.startY!;

            this.draw(currentX, currentY, width, height);
        }
    }

    draw(x: number, y: number, w: number, h: number) {
        const img = new Image();
        img.src = this.saved;

        img.onload = () => {
            this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx?.drawImage(
                img,
                0,
                0,
                this.canvas.width,
                this.canvas.height
            );
            this.ctx?.beginPath();
            this.ctx?.rect(x, y, w, h);
            this.ctx?.fill();
            this.ctx?.stroke();
        };

        console.log("draw");
    }
}
