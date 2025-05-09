console.log("Starting server...");

const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send({
        message: 'API is working'
    });
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});