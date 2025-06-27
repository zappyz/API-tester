# Zapman Tester

A Next.js project to test APIs with user-based request limits and an admin dashboard to manage usage.

---

## 🚀 Quick Start

### 1. Clone the project

```bash
git clone https://github.com/zappyz/Zapman.git
cd Zapman

```

### 2. Start the PostgreSQL container

```bash
docker-compose up -d
```
This runs PostgreSQL on port 5433.

### 3. Install dependencies
```bash
npm install
```

### 4. Set up the database
Create a .env file with the following:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5433/admin_dashboard"
```
### 5. Initialize the database
```bash
npm run db:init
```

### 6. Run the development server
```bash
npm run dev
```
Access the app at http://localhost:3000.

## Resetting the Database
If you need to start fresh (drop all data and re-run migrations):
```bash
npm run db:reset
```

## Additional Notes
Make sure Docker is installed and running before starting the PostgreSQL container.

The migrations are committed in the repo; no need to create migrations unless you change the schema.

Use ```bash npx prisma migrate dev``` only when you are developing and changing the Prisma schema.
