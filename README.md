# LAVA - Visual Project Management Platform

A powerful, canvas-based project management tool inspired by Notion, Figma, and Miro.

## Access the Site

The application is running as a web site. In GitHub Codespaces, access it at:

**https://rommentgrame-friendly-eureka-5pwqvrgwgxp37659.github.dev**

If running locally, go to http://localhost:3000

## Features

- Intelligent canvas for visual project structuring
- Drag-and-drop elements (text, shapes, images)
- Multi-page projects
- Dark mode native
- GitHub integration for versioning and collaboration

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, Konva.js
- **Backend**: Node.js, Express, TypeScript, Prisma, SQLite
- **Authentication**: JWT

## Installation (for local development)

1. Clone the repository
2. Install dependencies for frontend and backend

### Backend
```bash
cd backend
npm install
npm run prisma:generate
npm run prisma:db:push
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

3. Set up environment variables in backend/.env

## Usage

- Backend runs on port 5000
- Frontend on port 3000
- Add elements by clicking buttons, drag to move

## License

MIT