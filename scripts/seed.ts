const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Core users
  const elena = await prisma.user.upsert({
    where: { email: "elena@monoverse.pub" },
    update: {},
    create: {
      name: "Elena Kovacs",
      email: "elena@monoverse.pub",
      role: "EDITOR",
      profile: { create: { bio: "Editor in Chief" } }
    }
  });

  const james = await prisma.user.upsert({
    where: { email: "james@monoverse.pub" },
    update: {},
    create: {
      name: "James R. Okonkwo",
      email: "james@monoverse.pub",
      role: "EDITOR",
      profile: { create: { bio: "Deputy Editor" } }
    }
  });

  // Desks
  const deskEssays = await prisma.desk.upsert({
    where: { slug: "essays" },
    update: {},
    create: { name: "Essays", slug: "essays", description: "In-depth explorations linking philosophy, science, history, and culture." }
  });

  const deskCinema = await prisma.desk.upsert({
    where: { slug: "cinema" },
    update: {},
    create: { name: "Cinema", slug: "cinema", description: "Explorations in film and visual media." }
  });

  const typeArticle = await prisma.contentType.upsert({
    where: { slug: "article" },
    update: {},
    create: { name: "Article", slug: "article" }
  });

  // Read all MDX files
  const contentDir = path.join(__dirname, '../content');
  const directories = ['essays', 'cinema'];
  
  for (const dir of directories) {
    const dirPath = path.join(contentDir, dir);
    if (!fs.existsSync(dirPath)) continue;

    const files = fs.readdirSync(dirPath).filter((f: string) => f.endsWith('.mdx'));
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const rawContent = fs.readFileSync(filePath, 'utf8');
      const { data: frontmatter, content: body } = matter(rawContent);

      const slug = file.replace('.mdx', '');
      const deskId = dir === 'essays' ? deskEssays.id : deskCinema.id;

      let authorPerson = null;
      if (frontmatter.author) {
        const authorSlug = frontmatter.author.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
        authorPerson = await prisma.person.upsert({
          where: { slug: authorSlug },
          update: {},
          create: { name: frontmatter.author, slug: authorSlug, bio: frontmatter.authorRole || "Contributor" }
        });
      }

      let media = null;
      if (frontmatter.image) {
        media = await prisma.media.create({
          data: { url: frontmatter.image, altText: frontmatter.title }
        });
      }

      await prisma.content.upsert({
        where: { slug },
        update: {},
        create: {
          title: frontmatter.title,
          slug,
          summary: frontmatter.description || "",
          body: body,
          status: "PUBLISHED",
          deskId: deskId,
          typeId: typeArticle.id,
          readingTime: 12,
          publishedAt: frontmatter.date ? new Date(frontmatter.date) : new Date(),
          coverImageId: media ? media.id : undefined,
          authors: authorPerson ? {
            create: {
              personId: authorPerson.id,
              role: "AUTHOR"
            }
          } : undefined
        }
      });
      console.log(`Migrated ${dir}/${slug}`);
    }
  }

  console.log("Database seeded with all MDX content!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
