const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;
const API_KEY = process.env.SPOONACULAR_API_KEY;

app.use(cors());
app.use(express.json());

app.post('/recipes', async (req, res) => {
    const { diet, ingredients } = req.body;
    try {
        const response = await axios.get(
            'https://api.spoonacular.com/recipes/complexSearch',
            {
                params: {
                    apiKey: API_KEY,
                    diet: diet,
                    includeIngredients: ingredients,
                    number: 10,
                },
            }
        );
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch recipes' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});