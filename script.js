fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
  .then(response => response.json())
  .then(data => {
    const mealList = document.querySelector('.meal-list'); // Target the meal-list container

    if (data.meals && data.meals.length > 0) {
      const meals = data.meals.slice(1, 25); // Start from index 1 and fetch up to 25 meals

      meals.forEach(meal => {
        // Create the meal card
        const mealCard = document.createElement('div');
        mealCard.classList.add('meal-card');

        // Meal Image
        const mealImg = document.createElement('img');
        mealImg.src = meal.strMealThumb;
        mealImg.alt = meal.strMeal;
        mealCard.appendChild(mealImg);

        // Meal Title
        const mealTitle = document.createElement('h2');
        mealTitle.classList.add('meal-title');
        mealTitle.textContent = meal.strMeal;
        mealCard.appendChild(mealTitle);

        // Meal Description
        const mealDescription = document.createElement('p');
        mealDescription.classList.add('meal-description');
        mealDescription.textContent = meal.strInstructions.substring(0, 150) + '...'; // Truncate description to match the three-line limit
        mealCard.appendChild(mealDescription);

        // Ingredients List
        const ingredientsList = document.createElement('ul');
        ingredientsList.classList.add('meal-ingredients');
        for (let i = 1; i <= 5; i++) {
          const ingredient = meal[`strIngredient${i}`];
          const measurement = meal[`strMeasure${i}`];
          if (ingredient && measurement) {
            const ingredientItem = document.createElement('li');
            ingredientItem.textContent = `${ingredient} - ${measurement}`;
            ingredientsList.appendChild(ingredientItem);
          }
        }
        mealCard.appendChild(ingredientsList);

        // Video Link
        const videoLink = document.createElement('a');
        videoLink.href = meal.strYoutube;
        videoLink.target = '_blank';
        videoLink.classList.add('meal-video-link');
        videoLink.textContent = 'Watch Video';
        mealCard.appendChild(videoLink);

        // Append the card to the meal list
        mealList.appendChild(mealCard);
      });
    } else {
      const noMealsMessage = document.createElement('p');
      noMealsMessage.textContent = 'No meals found.';
      mealList.appendChild(noMealsMessage);
    }
  })
  .catch(error => {
    console.error('Error:', error);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = `Error: ${error.message}`;
    document.querySelector('.meal-list').appendChild(errorMessage);
  });
