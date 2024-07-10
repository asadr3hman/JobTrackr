# JobTrackr

**JobTrackr** is a Node.js-based job search platform that allows users to register, log in, create job postings, and track the status of their job applications (pending, interview, declined). This project provides a seamless way for job seekers to manage their job hunt efficiently.

## Features

- **User Registration and Login**: Secure user authentication and authorization.
- **Job Creation**: Users can create and manage job postings.
- **Status Tracking**: Track the status of job applications, including pending, interview, and declined.
- **RESTful API**: A robust and scalable API for all functionalities.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user and job data.
- **JWT**: JSON Web Tokens for secure authentication.
- **Mongoose**: ODM for MongoDB.


## API Endpoints

### User Routes

- `POST /register`: Register a new user.
- `POST /login`: Log in an existing user.

### Job Routes

- `POST /jobs`: Create a new job posting.
- `GET /jobs`: Get all job postings.
- `GET /jobs/:id`: Get a specific job posting.
- `PUT /jobs/:id`: Update the status of a job posting.
- `DELETE /jobs/:id`: Delete a job posting.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
