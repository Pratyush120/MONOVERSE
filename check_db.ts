import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const reviews = await prisma.content.findMany({ where: { type: { slug: 'review' } }});
  const community = await prisma.content.findMany({ where: { type: { slug: 'community' } }});
  const people = await prisma.person.findMany();
  
  console.log('Reviews:', reviews.length);
  console.log('Community:', community.length);
  console.log('People:', people.length);
}

main().finally(() => prisma.$disconnect());
