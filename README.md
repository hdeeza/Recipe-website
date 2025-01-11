# Recipe-website
**Description**:This project is a web page designed using HTML, CSS and JavaScript to fetch data using API,displaying a responsive layout and modern design elements.It's a recipe website where variety of meals are displayed along with their names(title), description, ingredients and measurement also displaying the images of the meals and a tutorial video at the bottom of each meal card.

##Table of Contents

1.[Project Name](#project-name)
2.[Table of Content](#table-of-contents)
3.[Introduction](#Overview)
4.[Live Demo](#live-demo)
5.[Features](#features)
6.[Technologies Used](#technologies-used)
7.[Setup and Installation](#setup-and-installation)
8.[Usage](#usage)
9.[Media Queries](#Media-Queries)
10.[License](#license)
11.[Author(s)](#authors)

## Overview

This project is built using HTML, CSS and JavaSript and provides a visually appealing and responsive layout for a webpage.It includes sections such as:

-A container section .
-A meal-list div.
-A meal cards with images, titles and description.
-A list containing meal ingredients and decription.
-A meal-video link with content and names of meals.

## Live-Demo
-Check out the live Demo of the Project:[LiveDemo](https://hotel-app-lgmw.onrender.com)
-check out the loom video

## Technologies Used

-HTML5
-CSS3
-JAVASCRIPT

## Features

-**Reasponsive Design**.The layout adjusts to various screen sizes using media queries.
-**Custom Properties**: Utilizes CSS variables for theme colors, making it easy to adjust the overall color scheme.
-**Modern Typography**:Uses "Arial, Helvetica, sans-serif" fonts for clean and modern look.
-**Flexbox Layout**:Ensures elements are properly aligned and spaced,creating a balanced design and neatness.
-**JavaScript**:Uses javascript for interactivity.
-**API**:Uses API for communication between softwares and allows users to fetch data from servers.

## Setup Istructions
1.**Clone the Repository**:
```bash
git clone https://github.com/hdeeza/Recipe-website
```

2.**Navigate to the project Directory**:
```bash
cd Recipe-website
```

3.**Open the HTML File**:
Open `index.html`in you preferred web browser to view the project.

## Usage

-The CSS file(`style.css`)includes  sections with classes that define the layout and styles for the webpage.
-To make any adjustments,edit the `style.css`file,and the changes will immediately reflect on the webpage upon refreshing the browser.
-The JavaScript contains the code for fetched data and the meal-link.

### Key HTML Structure

Here's a quick outline of the key HTML structure:
```html
    <div class="container">
        <h1>Meal Finder</h1>
      <div id="meal-list" class="meal-list">
          <div class="meal-card">
               <!-- meal-images -->
               <h2 class="meal-title">Chicken Handi
                     <!-- meal-title wil be here -->
               </h2>
               <p class="meal-description">
                   <!-- meal-description will be here -->
               </p>
               <ul class="meal-ingredients">
                    <!-- meal-ingredients will be here --> 
                </ul>
                <a href= "https://www.youtube.com/watch?v=IO0issT0Rmc" target="_blank" class="meal-video-link">
                    <!-- meal-video link will be here -->
                </a>
        </div>
     </div>
     </div>
     </div>            
```
### Key CSS Styles
-The CSS code starts with the universal code.
-Flexbox is used throughout for layout management,ensuring items are spaced and aligned as needed.
## Media Queries
--Media queries provide provide responsive design adjustment at various breakpointsand screen sizes.

## License
This project is lincensed under the MIT License-see[LICENSE](license)file for details..
## Authors
-**Name:** Hadiza Haruna
-**Email:** hdeeza001@gmail.com
-**GitHub:**[Hdeeza](https://github.com/Hdeeza) 




