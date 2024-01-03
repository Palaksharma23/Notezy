
  
<br>
<div  align="center">
<img  src="https://i.ibb.co/KwrYWGB/Whats-App-Image-2024-01-04-at-12-02-11-AM.jpg"  alt="Notezy Logo"  height ="auto"  width="400" />
<br>

<h1>Notezy ✒</h1>

<b>Postman API Documentation 👉: </b> [API Documentation](https://documenter.getpostman.com/view/27055315/2s9YsFEELg)

<b>Deployed Backend 👉: </b> [Notezy](https://notezy.onrender.com)

</div>

<br>

## Table of Contents

- [Introduction](#introduction)
- [Deployed Links](#deployed-links)
- [Technologies and Features](#technologies-and-features)
- [Choice of Technologies](#choice-of-technologies)
- [Features](#features)
- [Top Level Directory Structure](#top-level-directory-structure)
- [Installation](#installation)
- [Feedback](#feedback)

<br>

## Introduction
<p>

**Notezy** is a fully-featured note-taking web application. It offers quick and easy note creation, deletion, retrieval, management, searching, and sharing. Notezy is a quick and easy way to take and manage notes anytime and anywhere.

</p>

</div>

  

<br>


  

## Deployed Links

* <b>Postman API Documentation 👉: </b> [API Documentation](https://documenter.getpostman.com/view/27055315/2s9YsFEELg)

* <b>Deployed Backend 👉: </b> [Notezy](https://notezy.onrender.com)
  
  
<br>

## Technologies and Features

<br>

  

| Technology | Features |
|------------|----------|
| Node.js, Express.js | Backend of the application |
| MongoDB Atlas, Mongoose | Database for the application
| Atlas Search | Search functionality in the Application |
| Bcrypt | Password Management |
| JSON Web Token | Authorization and Authentication | | Pug | Server Side Rendering |
| Postman | API Testing and Documentation |
| Render | Deployment |

<br>


### Choice of Technologies

#### Framework: Express.js
I opted for Express.js, a popular and lightweight Node.js web application framework. Its simplicity and flexibility make it an ideal choice for building scalable and efficient RESTful APIs.

#### Database: MongoDB
For the database, I chose MongoDB, a NoSQL database. Its document-oriented structure aligns well with the JSON-like data of my application. MongoDB offers flexibility and scalability, making it suitable for storing notes and user-related information.

#### Full-Text Search: Atlas Search
To enhance search functionality, I integrated Atlas Search, a powerful feature provided by MongoDB Atlas. It ensures efficient and accurate full-text search capabilities for notes based on keywords. I have also implemented features like "Autocomplete", and "Fuzzy Search".

#### Security Packages
- **bcrypt**: Used for securely hashing passwords, enhancing user authentication.
- **JWT (JSON Web Tokens)**: Implemented for secure and stateless user authentication by generating and verifying tokens.
- **morgan**: Utilized for HTTP request logging during development.
- **cookie-parser**: Used for parsing cookies from incoming requests.


#### Additional Security and Performance Measures
- **express-rate-limit**: Helps mitigate security risks by implementing rate limiting and request throttling, protecting against potential attacks.
- **helmet**: Applied to enhance security by setting various HTTP headers.
- **express-mongo-sanitize**: Applied to sanitize user input and prevent MongoDB injection attacks.
- **hpp (HTTP Parameter Pollution)**: Implemented to protect against parameter pollution attacks in HTTP requests.
- **compression**: Implemented for response compression, improving application performance.
- **helmet xss-clean**: Added for protection against Cross-Site Scripting (XSS) attacks.

These technology choices are aimed at providing a secure, scalable, and efficient environment for building and deploying the Notezy application.

  
<br>
  
### Features

This project consists of wide variety of advanced features:

  

1) Fast, feature rich REST API (includes filters, sorts, pagination, and much more)

2) Security Features such as Rate Limiting, Password Encryption, etc.

3) User Authentication features of SignUp, Login, and Logout

4) Notes features such as 
-- Create a note
-- Update an existing note
-- Delete a note
-- Get all notes
-- Get a note by ID
-- Share a note with another user
-- Search for notes based on keywords

<br>

  

## Top-level directory structure

  


    ├── controllers             # This folder contains the controllers of the application. These controllers handle incoming requests from clients, interact with the model to retrieve or update data, and send responses back to the client.
    ├── models                  # This folder handles the data and manages the schema of the data to be stored in the database.
    ├── public                  # This folder handles images, JavaScript, and CSS that are related to the website and can be accessed by the client.
    ├── Routes                  # This folder handles the routes of the application, determining what actions need to be performed for specific routes.
    ├── utils                   # This folder manages the utility files that contain classes used throughout the website.
    ├── views                   # This folder manages the templates used to generate the view of the website. 
    ├── .gitignore  
    ├── .prettierrc
    ├── app.js
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── server.js

  

<div  align="center">

<img  src="https://i.ibb.co/BK8KLHM/MVC-Architecture.jpg"  alt="mvc architecture"  height="400"/>

</div>

<br/>

  

  

## Installation

<br>

  

To setup the project on your local environment, follow the given steps:

  

1. Fork the [Palaksharma23/Notezy](https://github.com/Palaksharma23/Notezy) repository.

2. Clone the repository:

  
  

Replace the `<USERNAME>` with your GitHub username.

  

Install dependencies

  

```bash
npm  install
```

Add a config.env file in the root directory and enter your MongoDb Atlas and REDIS Client credentials 
The format of config.env file should be similar to the following

```
NODE_ENV=Your_Node_Environment_Development_or_Production
PORT=Port_or_3000 (optional)
DATABASE=Your_MongoDB_Connection_String
JWT_SECRET=Your_JWT_Secret_Key
JWT_EXPIRES_IN=Your_JWT_Expiry_Time
JWT_COOKIE_EXPIRES_IN=Your_JWT_Cookie_Expiry_Time
```

To start the server in development mode

  

```
npm run dev
```

  

To start the server in production mode

  

```
npm run start:prod
```

  

Server will run on  `localhost:3000`.

<br>

## Feedback

Feel free to send any feedback on [Twitter](https://twitter.com/palaksharma2312) or [file an issue](https://github.com/Palaksharma23/Notezy/issues/new). 
