import React from "react";
import "../styles/toolbar.scss";

type Props = {};

const Toolbar = (props: Props) => {
    return (
        <div className="toolbar">
            <button className="toolbar-btn brush" />
        </div>
    );
};

export default Toolbar;
