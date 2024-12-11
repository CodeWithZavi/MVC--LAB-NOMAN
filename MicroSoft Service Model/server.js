const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config(); // server knows it has a .env file

// for accessing variables from .env
const PORT = process.env.PORT || 3000;
// if a port number is present, it will use that port; otherwise, it will use 3000

const bodyParser = require('body-parser'); // first install body parser
app.use(bodyParser.json()); // since we send JSON data, we use .json()

app.use(express.static('public'));

// Set up routes
app.get('/', function (req, res) {
     res.sendFile(__dirname + '/public/index.html'); // Serve the HTML page
});

// Simple route for welcome message
app.get('/', function (req, res) {
     res.send("Welcome to our hotel (Code With Zavian)");
});

// Import Menu router
const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);

// Import Person router
const personRoutes = require('./routes/personRoutes');
app.use('/person1', personRoutes);

// Import Axios and Cheerio for fetching and scraping external data
const axios = require('axios');
const cheerio = require('cheerio');

// Route to fetch data from school.com
app.get('/get-school-data', async (req, res) => {
    try {
        const schoolURL = 'https://school.com/api/data'; // Replace with the actual API endpoint

        // Fetch data from school.com
        const response = await axios.get(schoolURL);

        // Send the fetched data back to the client
        res.json({
            success: true,
            data: response.data, // Data from school.com
        });
    } catch (error) {
        console.error('Error fetching data from school.com:', error.message);

        res.status(500).json({
            success: false,
            message: 'Failed to fetch data from school.com',
        });
    }
});

// Route to scrape data from school.com if API does not exist
app.get('/scrape-school-data', async (req, res) => {
    try {
        const schoolURL = 'https://school.com'; // Replace with the actual website URL

        // Fetch the HTML content of the webpage
        const response = await axios.get(schoolURL);
        const html = response.data;

        // Load the HTML content into Cheerio
        const $ = cheerio.load(html);

        // Example: Extract specific data from the webpage
        const scrapedData = [];
        $('.some-class').each((index, element) => {
            scrapedData.push({
                title: $(element).find('.title-class').text().trim(),
                link: $(element).find('a').attr('href'),
            });
        });

        // Send the scraped data back to the client
        res.json({
            success: true,
            data: scrapedData,
        });
    } catch (error) {
        console.error('Error scraping data from school.com:', error.message);

        res.status(500).json({
            success: false,
            message: 'Failed to scrape data from school.com',
        });
    }
});

// Start the server
app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
