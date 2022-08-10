import React, { MutableRefObject, useEffect, useRef } from "react";
import CanvasState from "../store/CanvasState";
import ToolState from "../store/ToolState";
import "../styles/canvas.scss";
import Brush from "../tools/Brush";

type Props = {};

const Canvas = (props: Props) => {
    const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;

    useEffect(() => {
        CanvasState.setCanvas(canvasRef.current);
        ToolState.setTool(new Brush(canvasRef.current));
    });
    return (
        <div className="canvas">
            <canvas ref={canvasRef} width={800} height={500} />
        </div>
    );
};

export default Canvas;
