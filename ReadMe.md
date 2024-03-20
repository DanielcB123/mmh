# Getting Started with Meet Me Halfway

This guide will help you set up the Meet Me Halfway environment for both frontend and backend development.

## Frontend Setup

To get the frontend environment up and running, execute the following command:

    npx expo start

**Note:** For mobile development, ensure you're running on the same IP as your network, not `127.0.0.1`.

## Backend Setup

Navigate to the backend directory and start the server with the following commands:

    cd backend
    php artisan serve

### Running on a Network IP

If you need to serve your backend on your network IP for devices on the same network to access it, use:

    php artisan serve --host=YOUR_NETWORK_IP --port=8000

Replace `YOUR_NETWORK_IP` with your actual network IP address.

## Collaborating

Ensure that all team members are on the same page by regularly pulling changes from the remote repository:

    git pull origin main

### Before pushing new changes, it's a good practice to pull the latest updates to avoid conflicts.

