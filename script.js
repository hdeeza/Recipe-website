fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
  .then(response => response.json())
  .then(data => {
    const mealList = document.querySelector('.meal-list');

    if (data.meals && data.meals.length > 0) {
      const meals = data.meals.slice(1, 25); 

      meals.forEach(meal => {
        const mealCard = document.createElement('div');
        mealCard.classList.add('meal-card');

        const mealImg = document.createElement('img');
        mealImg.src = meal.strMealThumb;
        mealImg.alt = meal.strMeal;
        mealCard.appendChild(mealImg);

        const mealTitle = document.createElement('h2');
        mealTitle.classList.add('meal-title');
        mealTitle.textContent = meal.strMeal;
        mealCard.appendChild(mealTitle);

        const mealDescription = document.createElement('p');
        mealDescription.classList.add('meal-description');
        mealDescription.textContent = meal.strInstructions.substring(0, 150) + '...'; 
        mealCard.appendChild(mealDescription);

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
