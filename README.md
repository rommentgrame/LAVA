# LAVA - Visual Project Management Platform

A powerful, canvas-based project management tool inspired by Notion, Figma, and Miro.

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

## Installation

1. Clone the repository
2. Install dependencies for frontend and backend

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run prisma:migrate
npm run prisma:generate
npm run dev
```

3. Set up environment variables

Create `.env` in backend:
```
JWT_SECRET=your_secret_key
DATABASE_URL="file:./dev.db"
GITHUB_TOKEN=your_github_token
GITHUB_USERNAME=your_username
```

## Usage

- Start the backend server on port 5000
- Start the frontend on port 3000
- Open http://localhost:3000

## GitHub Integration

The app is designed to integrate with GitHub for automatic pushing, versioning, and collaboration. Set the GITHUB_TOKEN in the backend .env to enable GitHub operations.

## License

MIT