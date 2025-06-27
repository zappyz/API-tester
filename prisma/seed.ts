import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // create admin user
  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      role: 'admin',
      requestLimit: 100,
    },
  });

  // create normal user
  await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      name: 'Regular User',
      role: 'user', 
      requestLimit: 10,
    },
  });
}

main()
  .then(() => {
    console.log('Seeding complete.');
  })
  .catch((e) => {
    console.error('Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
