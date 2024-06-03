# Movie Library

## Description
A movie library web application built using the MERN stack. Users can search for movies, create lists, and view their lists.

## Features
- User authentication (Sign In/Sign Up)
- Search for movies using the OMDB API
- Create and manage movie lists
- Lists can be public or private

## Setup Instructions

### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Create a `.env` file and add the following environment variable:
    ```
    REACT_APP_API_URL=http://localhost:5000/api
    ```

3. Install dependencies and start the client:
    ```bash
    npm install
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage
- Sign up or log in to your account.
- Search for movies using the search bar.
- Create and manage your movie lists from the home page.
