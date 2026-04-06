# Light Gym App

Light Gym App is a full-stack workout tracker built with a Next.js frontend and an Express + Prisma backend. It lets users sign up, log in, browse exercises, create workout sessions, add exercises into a session, log sets with weight/reps, and view a simple profile summary.

## What It Does

- User signup and login with cookie-based auth
- Exercise library with search, media, and generated instructions
- Workout session creation and session history
- Add exercises to a workout session
- Log sets with weight, set number, and reps
- Delete sessions, exercises, and sets
- Profile page with basic activity stats

## Tech Stack

- Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS 4, Axios
- Backend: Express 5, TypeScript, Prisma 7, JWT, bcrypt, cookie-parser, cors
- Database: PostgreSQL
- Hosting: Vercel (frontend), Railway (backend), Neon (Postgres)

## Live Links

- Frontend: https://light-eta-henna.vercel.app
- Backend: https://light-production.up.railway.app

## Project Structure

```text
Light/
├── backend/
│   ├── prisma/
│   └── src/
└── frontend/
    ├── app/
    └── lib/
```

## API Routes

### Auth

- `POST /api/signup/signup`
  Create a new user and set the auth cookie.
- `POST /api/login/login`
  Log in a user and set the auth cookie.

### Exercises

- `GET /api/exercise/exercises`
  Get all exercises for the logged-in user.
- `GET /api/exercise/exercises?search=<term>`
  Search exercises by name or slug.

### Sessions

- `GET /api/session/workout`
  Get all workout sessions for the logged-in user.
- `POST /api/session/workout`
  Create a new workout session.
- `GET /api/session/workout/:sessionId`
  Get a single workout session with its exercises and sets.
- `POST /api/session/workout/:sessionId/exercise`
  Add an exercise into a workout session.
- `DELETE /api/session/workout/:sessionId`
  Delete a workout session.
- `DELETE /api/session/workout/:sessionId/exercise/:sessionExerciseId`
  Remove an exercise from a workout session.

### Sets

- `POST /api/sets/sets`
  Create a set log entry for a session exercise.
- `GET /api/sets/sets/:sessionExerciseId`
  Get set logs for one session exercise.
- `DELETE /api/sets/sets/:setId`
  Delete one set log entry.

### Profile

- `GET /api/profile/me`
  Get the logged-in user's profile and simple workout stats.

## How To Run Locally

### 1. Clone and install

```bash
git clone https://github.com/Am730-byte/Light.git
cd Light
cd backend && npm install
cd ../frontend && npm install
```

### 2. Set backend env vars

Create `backend/.env`:

```env
DATABASE_URL=your_postgres_connection_string
SECRETKEY=your_jwt_secret
PORT=5173
NODE_ENV=development
DAYS_RAW=15
FRONTEND_URL=http://localhost:3000
```

### 3. Apply schema and seed exercises

From `backend/`:

```bash
npm run db:migrate
npm run db:seed
```

### 4. Run backend

From `backend/`:

```bash
npm run dev
```

### 5. Run frontend

Create `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5173
```

From `frontend/`:

```bash
npm run dev
```

Then open:

- `http://localhost:3000`

## Deployment Notes

- Railway backend envs:
  - `DATABASE_URL`
  - `SECRETKEY`
  - `FRONTEND_URL`
  - `NODE_ENV=production`
  - `DAYS_RAW=15`
- Vercel frontend env:
  - `NEXT_PUBLIC_API_URL=https://light-production.up.railway.app`
- Railway target port should be `8080`
- Railway pre-deploy should normally be:

```bash
npm run db:migrate
```

For the very first deployment only, run:

```bash
npm run db:migrate && npm run db:seed
```
