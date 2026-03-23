# Coding Assignment 13 — UC Component Library Build Checks

This project extends the UI Component Library from Assignment 12 by adding **code quality checks** to the build and development workflow.

The project uses:

- Create React App with TypeScript
- Styled-Components
- Storybook
- Jest + React Testing Library
- Prettier
- ESLint
- Husky
- GitHub Actions
- Docker + nginx

Step 1: Install Node.js and npm

Download from https://nodejs.org/

Verify installation:
node -v
npm -v

Step 2: Set Up the Project

Clone the repository:
git clone <repository-url>
cd velasquez_fabian_ui_garden_build_checks

Install dependencies:
npm install --legacy-peer-deps

Step 3: Run Storybook

npm run storybook

Access at:
http://localhost:6006

Step 4: Run the Application Locally

npm start

Access at:
http://localhost:3000

Step 5: Build the Application

npm run build

The production files will be generated in the build/ folder.

Step 6: Code Quality Checks (Assignment 13)

This project uses Husky to enforce code quality before commits.

The following checks run automatically before every commit:

npm run format:check
npm run lint
npm run test:ci

If any of these fail, the commit is blocked.

Manual commands:

Prettier check:
npm run format:check

Fix formatting:
npm run format

ESLint check:
npm run lint

Run tests:
npm run test:ci

Step 7: CI/CD with GitHub Actions

This project includes a CI/CD pipeline using GitHub Actions located at:

.github/workflows/ci.yml

The workflow runs on push and pull requests and executes:

npm run format:check
npm run lint
npm run test:ci
npm run build

This ensures code quality is enforced even if local hooks are bypassed.

Step 8: Run the Application with Docker

Install Docker from https://www.docker.com/

Verify:
docker --version

Build the Docker image:
docker build -t velasquez_fabian_coding_assignment13 .

Run the container:
docker run --name velasquez_fabian_coding_assignment13 -p 8018:80 velasquez_fabian_coding_assignment13

Access the app:
http://127.0.0.1:8018

Re-running the Container

Remove existing container:
docker rm -f velasquez_fabian_coding_assignment13

Run again:
docker run --name velasquez_fabian_coding_assignment13 -p 8018:80 velasquez_fabian_coding_assignment13

Run in background:
docker run -d --name velasquez_fabian_coding_assignment13 -p 8018:80 velasquez_fabian_coding_assignment13

Stop container:
docker stop velasquez_fabian_coding_assignment13

View running containers:
docker ps

View logs:
docker logs velasquez_fabian_coding_assignment13