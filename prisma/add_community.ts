import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding a community article...');
  
  const communityType = await prisma.contentType.findUnique({ where: { slug: 'community' } });
  const desk = await prisma.desk.findUnique({ where: { slug: 'cinema' } });
  const author = await prisma.person.findFirst();
  const image = await prisma.media.findFirst();

  if (!communityType || !desk || !author || !image) {
    console.error("Missing dependencies");
    return;
  }

  await prisma.content.upsert({
    where: { slug: 'community-dune-review' },
    update: {},
    create: {
      title: 'Why Dune Part Two is a Masterpiece',
      slug: 'community-dune-review',
      summary: 'A fan perspective on Denis Villeneuve\'s latest epic.',
      body: 'Dune Part Two completely exceeded my expectations. The visuals were stunning and the pacing was incredible. A true modern masterpiece of sci-fi cinema.',
      status: 'PUBLISHED',
      publishedAt: new Date(),
      typeId: communityType.id,
      deskId: desk.id,
      coverImageId: image.id,
      authors: {
        create: [{ personId: author.id, role: 'AUTHOR' }]
      }
    }
  });

  console.log('Community article seeded!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
