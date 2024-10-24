const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());
// Define a simple API endpoint
app.get('/', (req, res) => {
    res.status(200).send('Hello Pardeep' );
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
