import React, { useState } from "react";
import axios from "axios";
import MemoryVisualizer from "./MemoryVisualizer";
import "./App.css"; // Import CSS file

function App() {
    const [pages, setPages] = useState("");
    const [memoryData, setMemoryData] = useState(null);

    const handleAllocate = async () => {
        const response = await axios.post("http://localhost:5000/allocate", {
            pages: pages.split(",").map(Number),
        });
        setMemoryData(response.data);
    };

    return (
        <div className="container">
            <h1>Virtual Memory Simulator</h1>
            <div className="input-section">
                <input
                    type="text"
                    placeholder="Enter page sequence (e.g., 1,2,3,4,2,1)"
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}
                />
                <button onClick={handleAllocate}>Simulate</button>
            </div>
            {memoryData && <MemoryVisualizer memoryData={memoryData} />}
        </div>
    );
}

export default App;
