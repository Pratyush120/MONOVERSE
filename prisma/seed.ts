import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Cinema Section data...');

  // 1. Create Media (Sample Covers/Images)
  const duneCover = await prisma.media.create({
    data: { url: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=1200', altText: 'Dune Desert' }
  });
  const alienCover = await prisma.media.create({
    data: { url: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=1200', altText: 'Alien Space' }
  });
  const matrixCover = await prisma.media.create({
    data: { url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200', altText: 'Matrix Code' }
  });
  const tarantinoPortrait = await prisma.media.create({
    data: { url: 'https://images.unsplash.com/photo-1588636734139-23c897f75d04?auto=format&fit=crop&q=80&w=400', altText: 'Director' }
  });

  // 2. Create Desk
  const cinemaDesk = await prisma.desk.upsert({
    where: { slug: 'cinema' },
    update: {},
    create: {
      name: 'Cinema',
      slug: 'cinema',
      description: 'An independent editorial publication studying film as art, history, and philosophy.'
    }
  });

  // 3. Create Content Types
  const typeReview = await prisma.contentType.upsert({ where: { slug: 'review' }, update: {}, create: { name: 'Review', slug: 'review' }});
  const typeFeature = await prisma.contentType.upsert({ where: { slug: 'feature' }, update: {}, create: { name: 'Feature', slug: 'feature' }});
  const typeCommunity = await prisma.contentType.upsert({ where: { slug: 'community' }, update: {}, create: { name: 'Community', slug: 'community' }});
  const typeList = await prisma.contentType.upsert({ where: { slug: 'list' }, update: {}, create: { name: 'List', slug: 'list' }});

  // 4. Create Authors
  const author1 = await prisma.person.upsert({
    where: { slug: 'elena-rodriguez' },
    update: {},
    create: {
      name: 'Elena Rodriguez',
      slug: 'elena-rodriguez',
      bio: 'Senior Film Critic at Monoverse.'
    }
  });

  const author2 = await prisma.person.upsert({
    where: { slug: 'marcus-chen' },
    update: {},
    create: {
      name: 'Marcus Chen',
      slug: 'marcus-chen',
      bio: 'Staff Writer specializing in science fiction cinema.'
    }
  });

  // 5. Create Movies (Entities with MovieDetail)
  const movieDune = await prisma.entity.upsert({
    where: { slug: 'dune-part-two' },
    update: {},
    create: {
      entityType: 'MOVIE',
      title: 'Dune: Part Two',
      slug: 'dune-part-two',
      description: 'Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.',
      imageId: duneCover.id,
      movieDetails: {
        create: {
          releaseDate: new Date('2024-03-01'),
          status: 'Now Showing',
          studio: 'Warner Bros'
        }
      }
    }
  });

  const movieFuriosa = await prisma.entity.upsert({
    where: { slug: 'furiosa' },
    update: {},
    create: {
      entityType: 'MOVIE',
      title: 'Furiosa: A Mad Max Saga',
      slug: 'furiosa',
      description: 'The origin story of renegade warrior Furiosa before her encounter and teamup with Mad Max.',
      imageId: alienCover.id,
      movieDetails: {
        create: {
          releaseDate: new Date('2024-05-24'),
          status: 'Now Showing',
          studio: 'Warner Bros'
        }
      }
    }
  });

  const movieMegalopolis = await prisma.entity.upsert({
    where: { slug: 'megalopolis' },
    update: {},
    create: {
      entityType: 'MOVIE',
      title: 'Megalopolis',
      slug: 'megalopolis',
      description: 'An architect wants to rebuild New York City as a utopia following a devastating disaster.',
      imageId: matrixCover.id,
      movieDetails: {
        create: {
          releaseDate: new Date('2024-12-01'),
          status: 'Coming Soon',
          studio: 'American Zoetrope'
        }
      }
    }
  });

  // 6. Create Articles (Content)
  const article1 = await prisma.content.upsert({
    where: { slug: 'dune-part-two-review' },
    update: {},
    create: {
      title: 'The Philosophy of Dune\'s Sandworms',
      slug: 'dune-part-two-review',
      summary: 'An ecological and philosophical reading of Frank Herbert\'s desert leviathans on screen.',
      body: 'This is the full text of the essay...',
      status: 'PUBLISHED',
      deskId: cinemaDesk.id,
      typeId: typeReview.id,
      coverImageId: duneCover.id,
      readingTime: 20,
      authors: {
        create: [{ personId: author1.id, role: 'AUTHOR' }]
      },
      entityReferences: {
        create: [{ entityId: movieDune.id }]
      }
    }
  });

  const article2 = await prisma.content.upsert({
    where: { slug: 'the-new-era-of-sci-fi' },
    update: {},
    create: {
      title: 'The New Era of Cerebral Sci-Fi',
      slug: 'the-new-era-of-sci-fi',
      summary: 'How recent blockbusters are redefining the intellectual boundaries of science fiction cinema.',
      body: 'Long form content goes here...',
      status: 'PUBLISHED',
      deskId: cinemaDesk.id,
      typeId: typeFeature.id,
      coverImageId: matrixCover.id,
      readingTime: 12,
      authors: {
        create: [{ personId: author2.id, role: 'AUTHOR' }]
      }
    }
  });

  // Create a default User for Collection
  const user = await prisma.user.upsert({
    where: { email: 'admin@monoverse.com' },
    update: {},
    create: {
      email: 'admin@monoverse.com',
      name: 'Admin',
      role: 'ADMIN'
    }
  });

  // 7. Create Collection (Lists)
  const list1 = await prisma.collection.upsert({
    where: { slug: 'essential-sci-fi' },
    update: {},
    create: {
      title: 'Essential Sci-Fi of the 21st Century',
      slug: 'essential-sci-fi',
      description: 'A curated list of mind-bending science fiction films.',
      creatorId: user.id,
      items: {
        create: [
          { itemType: 'MOVIE', entityId: movieDune.id, order: 1 }
        ]
      }
    }
  });

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
