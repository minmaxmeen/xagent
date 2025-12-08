# XAgent Frontend (Next.js)

This folder contains a minimal Next.js frontend for the XAgent project.

Quick commands:

- Install dependencies:

```bash
cd frontend
npm install
```

- Run dev server (hot reload):

```bash
npm run dev
```

- Build for production:

```bash
npm run build
npm start
```

- Docker (build and run):

```bash
docker build -t xagent-frontend ./frontend
docker run -p 3000:3000 -e NEXT_PUBLIC_API_URL=http://host.docker.internal:8001 xagent-frontend
```

- Using docker-compose (from repo root):

```bash
docker-compose up --build frontend
```

Notes:
- The frontend reads the backend base URL from `NEXT_PUBLIC_API_URL`.
- In development you can set `.env.local` in `frontend/` or export the env var before running.
