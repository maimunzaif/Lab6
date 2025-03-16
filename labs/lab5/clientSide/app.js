document.getElementById('recipeForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const diet = document.getElementById('diet').value;
    const ingredients = document.getElementById('ingredients').value;

    try {
        const response = await fetch('/recipes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ diet, ingredients }),
        });
        const recipes = await response.json();
        displayRecipes(recipes);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
});

function displayRecipes(recipes) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = recipes.map(recipe => `
        <div class="recipe">
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}">
            <a href="${recipe.sourceUrl}" target="_blank">View Recipe</a>
        </div>
    `).join('');
}