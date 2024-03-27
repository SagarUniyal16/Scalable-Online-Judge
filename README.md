# CODEVERSE - Online JUDGE Application 2024

## Overview

CodeVerse is an online judge application designed to provide programmers with a platform to solve coding problems and receive immediate feedback on their solutions. It offers a user-friendly interface, advanced code editor, custom test case evaluation, and administrative features for managing problem statements and user accounts.It is also available for different screen sizes.

## Technology Stack - MERN

<img src="https://i0.wp.com/blog.apitier.com/wp-content/uploads/2023/02/MERN_Stack.jpg?fit=560%2C315&ssl=1" alt="Node.js Logo" width="600" height="250"/> 
## Features

- **User Authentication**:  Users can create an account, log in, and log out.
- **Question List**: A list of questions with their difficulty level which links to solving problem page.
- **Code Editor**: Integrated code editor powered by NPM with syntax highlighting, auto-indentation, and line numbering for writing and testing code solutions.
- **Custom Test Cases**: Users can run their code against test cases provided for each problem.
- **Submission Evaluation**: Code submissions are evaluated against predefined test cases, providing users with instant feedback on their solutions.
- **Previous Submission**: Users can view their last successful submission.


## Getting Started

Follow these steps to set up and run HASH CODE on your local machine:

### Prerequisites

- Node.js and npm installed on your system.
- MongoDB database server running locally or accessible via connection string.

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/SagarUniyal16/Scalable-Online-Judge.git
    ```

2. Navigate to the Backend directory:

    ```bash
    cd Scalable-Online-Judge/Backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```   

### Configuration

1. Create a `.env` file in the backend directory:

    ```plaintext
    PORT=Any port of your system that is available,Example->8000
    DATABASE_URL=your_database_connection_string
    ```

2. Replace `your_database_connection_string` with the connection string for your MongoDB database.

### Database Setup

1. Ensure that MongoDB is installed on your system. If not, you can download and install it from the [official MongoDB website](https://www.mongodb.com/try/download/community).

2. Start the MongoDB service on your local machine.

3. Create a new MongoDB database for CodeVerse. You can do this using the MongoDB shell or a GUI tool like MongoDB Compass.

4. Once you've created the database, update the `.env` file in the root directory of your project with the MongoDB connection string. Replace `your_mongodb_connection_string` with your actual MongoDB connection string:

    ```plaintext
    PORT=Any port of your system that is available,Example->8000
    MONGODB_URI=your_mongodb_connection_string
    ```

    You can obtain your MongoDB connection string from your MongoDB Atlas dashboard or from your local MongoDB instance.

5. Save the changes to the `.env` file.

6. Run the database migrations to create the necessary collections and indexes:

    ```bash
    npm run migrate
    ```

    This command will create the required collections and indexes in your MongoDB database based on the defined schemas.

7. Your MongoDB database is now set up and ready to use with CodeVerse.1

### Frontend Setup

HASH CODE frontend is built using Vite.Vite is a next-generation front-end dev tool, aiming to improve the developer experience of webpack when it comes to developing JavaScript applications. Here's how to set it up:

1. Navigate to the Frontend directory:

    ```bash
    cd Scalable-Online-Judge/Frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the Frontend directory.

4. Add the following environment variable to the `.env` file to specify the backend API URL:

    ```plaintext
    VITE_API_PORT=http://localhost:`your defined port for backend`.Example->http://localhost:8000
    ```

    Replace `http://localhost:8000` with the base URL of your backend API.

5. Save the changes to the `.env` file.

6. Start the Client development server:

    ```bash
    npm run dev
    ```

7. Access the frontend in your web browser at `Vite provided port` or you can change it to any other available port.


### Running the Application

1. Start the Backend server:

    ```bash
    node Index.js
    ```

2. Access the application in your web browser at `http://localhost:5173`.

## Usage

1. Register a new user account or log in with existing credentials.

2. Explore the list of available problem statements and select one to solve.

3. Use the integrated code editor to write your solution and test it against custom test cases.

4. Submit your code for evaluation and receive immediate feedback on its correctness and efficiency.


## API Routes

The following API routes are available:

- `POST /signup`: Register a new user account.
- `POST /login`: Log in with existing credentials.
- `GET /problem`: List of Questions with their corresponding difficulty level.
- `GET /problem/:id`: Get problem Description for particular question.
- `POST /problem/run`: Run code for custom inputs.
- `POST /problem/run`: Submit code for evaluation against pre defined test.
- `POST /getsubmission`: Responds with the last successful submission if present for a user.
- `POST /problem`: Add problem statement.

## Contributing

Contributions to CodeVerse are welcome! Here's how you can contribute:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

    ```bash
    git checkout -b feature/your-feature
    ```

3. Commit your changes and push to your branch:

    ```bash
    git commit -am 'Add your feature'
    git push origin feature/your-feature
    ```

4. Open a pull request with a detailed description of your changes.


## License

This project is licensed under the [MIT License](LICENSE).

MIT License

Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acknowledgements

- Special thanks to ALGOUNIVERSITY TEAM for their support.
- Inspired by the concept of online judges like LeetCode and GeeksforGeeks.