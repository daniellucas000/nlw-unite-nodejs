import { prisma } from '../src/lib/prisma';

async function seed() {
  await prisma.event.create({
    data: {
      id: 'ed7280ab-be9e-4e61-b1cf-f3e3e50cf308',
      title: 'Unite Sumit',
      slug: 'unite-sumit',
      details: 'Um evento para devs apaixonados(as) por códigos',
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log('Database seeded!');
  prisma.$disconnect();
});
