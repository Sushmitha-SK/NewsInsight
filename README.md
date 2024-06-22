# News Portal

News Insight is a React application that lets users browse, search, and favorite news articles. It uses Redux for state management and Redux Persist for saving state across sessions.

## Features

- Browse news by category
- Search for news articles
- Mark articles as favorites
- View detailed article information
- Pagination

## Deployed Link

- https://news-insight-news-portal.vercel.app/

## Technologies Used

- ReactJS
- Redux Toolkit
- Redux Persist
- react-router-dom
- Axios
- Bootstrap
- Font Awesome
- News API

## Usage

- **Home Page:** Displays top news headlines based on selected category with pagination. Clicking on "Read More" of a particular News Card navigates to the News Details page.
- **Search:** Use the search input in the navbar to search for news articles by keywords.
- **Favorites:** Click the star icon to mark an article as favorite. Access favorites via the "Favorites" link in the navbar with pagination support.
- **News Details:** Click on "Read More" to view detailed information about an article.

## Components

- **Navbar:** Provides navigation links, search functionality, and favorites count.
- **NewsCard:** Displays individual news articles with options to mark as favorite and view details.

## State Management

- **Redux Store:** Configured with redux-persist to persist certain parts of the state across sessions.
- **newsSlice:** Contains the initial state and reducers for managing news data, categories, search terms, favorites, article details, and pagination.
- **Async Actions:** Defined in `newsActions.js` for fetching news data and searching articles using Axios.

## API Integration

- **News API:** Axios-based functions in `newsApi.js` to fetch news articles and search by keywords.
- **API Used:** https://gnews.io/

## Styling

- **CSS:** Custom stylesheets for each component to ensure a consistent and responsive UI.
- **Bootstrap:** Used for layout and styling.
- **Font Awesome:** Provides icons for UI elements.
