### Coding Assignment 12 — Web Component Library (React + Storybook + Docker)

This repository contains a UI Component Library built with:
- Create React App (TypeScript)
- Styled-Components
- Storybook
- Jest + React Testing Library
- Docker (production build served by nginx)

---

## REQUIRED: Run the web application on localhost:8083 (Docker)

### 0) Prerequisites
- Docker Desktop installed and RUNNING
  - If Docker is not running, Docker commands will fail.

### 1) Build the Docker image
Open a terminal in the project root (same folder as `Dockerfile`) and run:

```bash
docker build -t velasquez_fabian_coding_assignment12 .

### 2) Run the Docker container (maps localhost:8083 -> container:80)

2) Run the Docker container (maps localhost:8083 -> container:80)

docker run --name velasquez_fabian_coding_assignment12 -p 8083:80 velasquez_fabian_coding_assignment12

### 3) Open in browser

http://127.0.0.1:8083




