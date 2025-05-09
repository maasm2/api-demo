console.log("Starting server...");

const express = require('express');
const app = express();
const PORT = 8080;

const admin = require("firebase-admin");
const credentials = require("./key.json");

admin.initializeApp({
    credential: admin.credential.cert(credentials)
})

const db = admin.firestore();

app.use(express.json());



app.get('/', (req, res) => {
    res.send({
        message: 'API is working'
    });
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});