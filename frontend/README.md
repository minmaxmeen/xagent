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
docker run -p 3000:3000 xagent-frontend
```

- Using docker-compose (from repo root):

```bash
docker-compose up --build frontend
```

Notes:
- The frontpage is static by default. Configure other pages or components to call the backend when required.
- For runtime configuration, environment variables can still be passed to the container if you need them.
