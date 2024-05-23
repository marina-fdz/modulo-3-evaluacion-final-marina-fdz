![Adalab](https://beta.adalab.es/resources/images/adalab-logo-155x61-bg-white.png)

![Rick&Morty](https://www.indiewire.com/wp-content/uploads/2022/10/Rick-Morty-Season-6-Fire-Eyes.png)


# Rick and Morty Character Search App

Welcome to the Rick and Morty Character Search App. This is an evaluation exercise that's part of Module 3 of Adalab's bootcamp.


## Overview

Simple yet functional web application that can search for characters from the "Rick and Morty" show. Users will be able to search for characters by name, filter them by features and view detailed information about each one.


## Features

- **Search Functionality:** Search for characters by name, and filter them by alive/dead status and human/alien species.
- **Character List:** Display a list of characters matching the search criteria.
- **Character Details:** View detailed information about each character, including their image, status, species, origin and number of episodes they're on.
- **Responsive Design:** Ensure the app is usable on both desktop and mobile devices.


## Demo

http://beta.adalab.es/modulo-3-evaluacion-final-marina-fdz/


## How to use

1. **Search for Characters:** Use the search bar at the top of the page to type in a character's name. The results displayed will update as the user types.

2. **Filter by Features:** Additional to the name search, it is possible to filter the results by the species they belong (human or alien) o to check whether they are alive, dead, or that is classified information.

3. **View Character Details:** Click on a character's card to view more detailed information about them. On the top-right corner there's button that when clicked will go back to the previus search.



## Tech Stack

- VISUAL STUDIO CODE (VSC)
- HTML
- JS
- REACT
- GIT / GITHUB
- SASS / SCSS
- [API](https://rickandmortyapi.com/api/character)



## Components tree

The body of the app has this structure:

```
App.jsx
 ├─ Header.jsx 
 ├─ Main.jsx
 |  ├─ Filters.jsx
 |  |   ├─ FilterByName.jsx
 |  |   ├─ FilterBySpecies.jsx
 |  |   └─ FilterByStatus.jsx
 |  └─ CharacterList.jsx
 |      └─ CharacterCard.jsx
 ├─ CharacterDetail.jsx
 └─ NotFound.jsx
```



## Run Locally


Clone the project

```bash
  git clone https://github.com/Adalab/modulo-3-evaluacion-final-marina-fdz
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Open your web browser and go to http://localhost:3000 to see the app in action.



## Author

[@marina-fdz](https://www.github.com/marina-fdz)
