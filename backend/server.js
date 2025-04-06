const express = require("express");
const cors = require("cors");
const Memory = require("./memory");

const app = express();
app.use(express.json());
app.use(cors());

const memory = new Memory(4); // Example: 4 page frames

app.post("/allocate", (req, res) => {
    const { pages } = req.body;
    const result = memory.allocatePages(pages);
    res.json(result);
});

app.listen(5000, () => console.log("Server running on port 5000"));
