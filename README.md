# Zapman Tester

A Next.js project to test APIs with user-based request limits and an admin dashboard to manage usage.

---

## 🚀 Quick Start

### 1. Clone the project

```bash
git clone https://github.com/YOUR_USERNAME/api-tester.git
cd api-tester

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

Run Prisma migrations:
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Seed an admin user
```bash
npm run seed
```

### 6. Run the development server
```bash
npm run dev
```
Access the app at http://localhost:3000.

## Additional Notes
Make sure Docker is installed and running before starting the PostgreSQL container.

If you need to reset the database, you can stop the container and remove the volume at ./postgres_data/.