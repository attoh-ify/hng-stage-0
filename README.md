# Dynamic Profile API - Backend Wizard Stage 0

## Description
A simple RESTful API that returns my profile information and a random cat fact.

## Endpoint
GET /me -> Returns:
```json
{
    "status": "success",
    "user": {
        "email": "email...",
        "name": "name...",
        "stack": "stack..."
    },
    "timestamp": "2025-10-17T12:34:56.789Z",
    "fact": "cat fact..."
}
```

## Run Locally
git clone <repo_url>

cd project-folder

npm install

npm run dev


## Dependencies
express

axios

winston

dotenv

express-rate-limit

express-useragent

cors


## Environment Variables
PORT=5000

MY_NAME=your-name

MY_EMAIL=your-email

MY_STACK=your-stack