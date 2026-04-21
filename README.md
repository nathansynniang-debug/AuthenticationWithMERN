# MERN Stack Authentication

A simple and secure Full-Stack authentication system using MongoDB, Express, React, and Node.js.

##  How to Run

To start both the frontend and the backend server simultaneously, run:

```bash
npm run dev
```
## Environment Variables

An .env.example file is provided in the root directory. To set up your environment:

    Create a new file named .env in the backend directory.

    Copy the contents of .env.example into your new .env file.

    Replace the placeholder values with your actual MongoDB URI and JWT Secret.

## Installation

Clone the repo
    
    git clone https://github.com/nathansynniang-debug/AuthenticationWithMERN.git
    

Enter the folder directory: 

Install dependencies
    
    
    npm run setup
    

## Run the server

    npm run dev
    

## Features

    JWT Auth: Secure token-based authentication.

    Vite Proxy: Frontend and Backend connected via Vite proxy.

    Protected Routes: Redirects for logged-in/logged-out states.

    Persistence: Keeps user logged in on page refresh.