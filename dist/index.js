"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const result = [
    { id: 1, name: 'kneegorilla' },
    { id: 2, name: 'elbowgorilla' },
];
app.get('/', (req, res) => {
    res.send(result);
});
app.listen(3001, () => console.log(`Example app listening on port 3001!`));
//# sourceMappingURL=index.js.map