# healthtrackerapp

This repository contains a MERN stack application with a backend built using Node.js and Express, and a frontend built with React and Tailwind CSS. 

## Folder Structure

- `backend/` - Contains the Node.js and Express backend.
- `frontend/` - Contains the React frontend with Tailwind CSS.

## Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup and Installation

### Backend

1. Navigate to the `backend` folder:

    ```bash
    cd backend
    ```

2. Install the backend dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` folder with the following content:

    ```env
    MONGO_URI=your_mongodb_connection_string_here
    ```

    Replace `your_mongodb_connection_string_here` with your actual MongoDB connection URI.

4. Start the backend server:

    ```bash
    npm start
    ```

### Frontend

1. Navigate to the `frontend` folder:

    ```bash
    cd ../frontend
    ```

2. Install the frontend dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

4. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- The backend server runs on port 5000 by default.
- The frontend development server runs on port 3000 by default.

## Folder Overview

### `backend/`

- **server.js** - Entry point for the backend application.
- **routes/** - Contains API route definitions.
- **models/** - Contains Mongoose schemas and models.
- **controllers/** - Contains logic for handling API requests.
- **.env** - Configuration file for environment variables (e.g., MongoDB URI).

### `frontend/`

- **src/** - Contains React components, pages, and styles.
- **tailwind.config.js** - Tailwind CSS configuration.
- **package.json** - Frontend project dependencies and scripts.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test them.
4. Submit a pull request describing your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

