import React from "react";
import "./MemoryVisualizer.css";

function MemoryVisualizer({ memoryData }) {
    return (
        <div className="visualizer-container">
            <h2>Simulation Result</h2>
            <div className="memory-box">
                <h3>Frames:</h3>
                <div className="frames">
                    {memoryData.frames.map((frame, index) => (
                        <div key={index} className="frame">
                            {frame !== null ? frame : "-"}
                        </div>
                    ))}
                </div>
            </div>
            <p><strong>Page Queue:</strong> {memoryData.pageQueue.join(" → ")}</p>
            <p><strong>Page Faults:</strong> {memoryData.pageFaults}</p>
        </div>
    );
}

export default MemoryVisualizer;
