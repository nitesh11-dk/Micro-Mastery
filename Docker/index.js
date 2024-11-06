const axios = require('axios');


const express = require('express');
const app = express();
const port = 3000;


app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://catfact.ninja/fact');
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error fetching cat fact');
    }
});



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

