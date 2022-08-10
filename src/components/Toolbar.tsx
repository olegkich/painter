import React from "react";
import CanvasState from "../store/CanvasState";
import ToolState from "../store/ToolState";
import "../styles/toolbar.scss";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";

type Props = {};

const Toolbar = (props: Props) => {
    return (
        <div className="toolbar">
            <button
                className="toolbar-btn brush"
                onClick={() =>
                    ToolState.setTool(new Brush(CanvasState.canvas!))
                }
            />
            <button
                className="toolbar-btn rect"
                onClick={() => ToolState.setTool(new Rect(CanvasState.canvas!))}
            />
            <button className="toolbar-btn line" />
            <button className="toolbar-btn undo" />
        </div>
    );
};

export default Toolbar;
