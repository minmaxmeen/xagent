# XAgent — FastAPI Services

This repository contains a minimal FastAPI backend service for the XAgent project:


Quick start (requires Docker & Docker Compose):

```bash
# from repository root (/Users/meen/core/pro/xai/xagent)
docker-compose up --build
```

Backend (port 8001):

Example curl commands:

```bash
curl http://localhost:8001/api/hello
curl http://localhost:8001/health
curl -X POST -H "Content-Type: application/json" -d '{"text":"hi"}' http://localhost:8001/api/echo
```

## Dev Container

- **Open in container:** In VS Code, choose "Remote-Containers: Open Folder in Container..." and open the repository root.
- **What it sets up:** Uses the official Python devcontainer image, installs dependencies from `backend/requirements.txt`, and forwards port `8001`.
- **Run the backend locally in the container:**

```bash
# from repository root inside the container
uvicorn backend.app.main:app --host 0.0.0.0 --port 8001 --reload
```

After starting, the backend will be reachable on the forwarded container port (host `localhost:8001`).
