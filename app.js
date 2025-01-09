// src/app.js
const express = require('express');
const NewsAPI = require('newsapi');
const path = require('path');

const app = express();
const newsapi = new NewsAPI('your_api_key'); // Replace with your NewsAPI key

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../public')); // Ensure this points to your views directory

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, '../public')));

// Fetch news articles and render the homepage
app.get('/', async (req, res) => {
    try {
        const response = await newsapi.v2.everything({
            q: 'news',
            language: 'en',
            sortBy: 'publishedAt',
            pageSize: 100 // Adjust the number of articles displayed
        });

        const articles = response.articles;

        res.render('index', { articles });
    } catch (error) {
        res.status(500).send('Error fetching news articles');
    }
});


app.get('/sports', async (req, res) => {
    try {
        const response = await newsapi.v2.everything({
            q: 'cricket', // Query parameter for the topic
            language: 'en', // Language of the articles
            sortBy: 'publishedAt', // Sort by publication date
            pageSize: 100 // Number of articles to fetch
        });

        const articles = response.articles;

        res.render('index', { articles });
    } catch (error) {
        console.error('Error fetching news articles:', error); // Log the error for debugging
        res.status(500).send('Error fetching news articles');
    }
});

app.get('/entertainment', async (req, res) => {
    try {
        const response = await newsapi.v2.everything({
            q: 'entertainment', // Query parameter for the topic
            language: 'en', // Language of the articles
            sortBy: 'publishedAt', // Sort by publication date
            pageSize: 100 // Number of articles to fetch
        });

        const articles = response.articles;

        res.render('index', { articles });
    } catch (error) {
        console.error('Error fetching news articles:', error); // Log the error for debugging
        res.status(500).send('Error fetching news articles');
    }
});

app.get('/finance', async (req, res) => {
    try {
        const response = await newsapi.v2.everything({
            q: 'finance', // Query parameter for the topic
            language: 'en', // Language of the articles
            sortBy: 'publishedAt', // Sort by publication date
            pageSize: 100 // Number of articles to fetch
        });

        const articles = response.articles;

        res.render('index', { articles });
    } catch (error) {
        console.error('Error fetching news articles:', error); // Log the error for debugging
        res.status(500).send('Error fetching news articles');
    }
});

app.get('/technology', async (req, res) => {
    try {
        const response = await newsapi.v2.everything({
            q: 'technology', // Query parameter for the topic
            language: 'en', // Language of the articles
            sortBy: 'publishedAt', // Sort by publication date
            pageSize: 100 // Number of articles to fetch
        });

        const articles = response.articles;

        res.render('index', { articles });
    } catch (error) {
        console.error('Error fetching news articles:', error); // Log the error for debugging
        res.status(500).send('Error fetching news articles');
    }
});

app.get('/health', async (req, res) => {
    try {
        const response = await newsapi.v2.everything({
            q: 'health', // Query parameter for the topic
            language: 'en', // Language of the articles
            sortBy: 'publishedAt', // Sort by publication date
            pageSize: 100 // Number of articles to fetch
        });

        const articles = response.articles;

        res.render('index', { articles });
    } catch (error) {
        console.error('Error fetching news articles:', error); // Log the error for debugging
        res.status(500).send('Error fetching news articles');
    }
});

app.get('/world', async (req, res) => {
    try {
        const response = await newsapi.v2.everything({
            q: 'beed', // Query parameter for the topic
            language: 'en', // Language of the articles
            sortBy: 'publishedAt', // Sort by publication date
            pageSize: 100 // Number of articles to fetch
        });

        const articles = response.articles;

        res.render('index', { articles });
    } catch (error) {
        console.error('Error fetching news articles:', error); // Log the error for debugging
        res.status(500).send('Error fetching news articles');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
