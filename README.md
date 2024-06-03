# Movie Library

## Description
A movie library web application built using the MERN stack. Users can search for movies, create lists, and view their lists.

## Features
- User authentication (Sign In/Sign Up)
- Search for movies using the OMDB API
- Create and manage movie lists
- Lists can be public or private

## Setup Instructions

### Backend

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Create a `.env` file and add the following environment variables:
    ```
    MONGO_URI=mongodb://localhost:27017/movielibrary
    JWT_SECRET=your_jwt_secret
    OMDB_API_KEY=your_omdb_api_key
    PORT=5000
    ```

3. Install dependencies and start the server:
    ```bash
    npm install
    npm start
    ```


