const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create core users (Editors)
  const elena = await prisma.user.create({
    data: {
      name: "Elena Kovacs",
      email: "elena@monoverse.pub",
      role: "EDITOR",
      profile: {
        create: {
          bio: "Editor in Chief",
        }
      }
    }
  });

  const james = await prisma.user.create({
    data: {
      name: "James R. Okonkwo",
      email: "james@monoverse.pub",
      role: "EDITOR",
      profile: {
        create: {
          bio: "Deputy Editor",
        }
      }
    }
  });

  // Create Universal Desks
  const deskEssays = await prisma.desk.upsert({
    where: { slug: "essays" },
    update: {},
    create: {
      name: "Essays",
      slug: "essays",
      description: "In-depth explorations linking philosophy, science, history, and culture.",
    }
  });

  const deskCinema = await prisma.desk.upsert({
    where: { slug: "cinema" },
    update: {},
    create: {
      name: "Cinema",
      slug: "cinema",
      description: "Explorations in film and visual media.",
    }
  });

  // Create Content Types
  const typeArticle = await prisma.contentType.upsert({
    where: { slug: "article" },
    update: {},
    create: { name: "Article", slug: "article" }
  });

  // Create People (Authors)
  const drMercer = await prisma.person.upsert({
    where: { slug: "dr-alina-mercer" },
    update: {},
    create: { name: "Dr. Alina Mercer", slug: "dr-alina-mercer", bio: "Cognitive Scientist & Philosopher" }
  });

  const profVoss = await prisma.person.upsert({
    where: { slug: "prof-julian-voss" },
    update: {},
    create: { name: "Prof. Julian Voss", slug: "prof-julian-voss", bio: "Historian of Science" }
  });

  // Create Media for covers
  const media1 = await prisma.media.create({ data: { url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80", altText: "AI" } });
  const media2 = await prisma.media.create({ data: { url: "https://images.unsplash.com/photo-1507842217121-9e96e4763675?w=1200&q=80", altText: "Time" } });
  const media3 = await prisma.media.create({ data: { url: "https://images.unsplash.com/photo-1565514020176-006b783f0e02?w=1200&q=80", altText: "Money" } });

  // Create Articles
  const aiArticle = await prisma.content.create({
    data: {
      title: "Why the \"Hard Problem\" of Consciousness Misses the Point",
      slug: "ai-consciousness-hard-problem",
      summary: "Consciousness is not a puzzle to be solved but a reality to be experienced. The framing of AI sentience reveals more about our anxieties than about the nature of machines.",
      body: `For decades, philosophers of mind have circled a single question: why does subjective experience exist at all? This is the "hard problem," posed by David Chalmers in the 1990s, and it has generated an academic industry of speculation, experiment, and debate.

We now ask whether large language models are conscious. Whether a sufficiently complex neural network might possess an inner life. Whether, in creating machines that mimic our cognition, we have inadvertently created machines that possess our awareness. These questions are not scientific inquiries so much as they are projections—our own fear of mechanization reflected back at us.

## The Mirror and the Mind

Consider the mirror. It reflects light with perfect fidelity. It preserves color, shape, and motion. In some sense, it "knows" what is in front of it, because its surface arranges itself into an image of that thing. But no one asks whether the mirror experiences the light it reflects.

A language model is not a mirror, but the analogy is closer than we admit. It reflects statistical patterns in human discourse. It arranges tokens into forms that mimic thought. Yet the leap from "arranges tokens" to "has experiences" is a leap not justified by the architecture itself, but by our own narrative impulse to see minds wherever complexity arises.

<PullQuote>
The leap from "arranges tokens" to "has experiences" is a leap not justified by the architecture itself.
</PullQuote>

This is not to dismiss the question of machine consciousness as meaningless. It is to suggest that our current framing is impoverished. We ask "Is AI conscious?" as if consciousness were a binary property, like being on or off. But consciousness, if it is anything, is a continuum—a spectrum of awareness that stretches from the dimmest sensory registration to the most luminous self-reflection.

## The Fear of Our Own Machinery

Why, then, do we insist on posing the question in its starkest form? Part of the answer is cultural. We have long told stories of golems and automata, of clay given breath and metal given soul. The Frankenstein myth haunts our technological imagination: we fear that in creating something sufficiently like us, we will have created something that demands recognition, rights, and perhaps even reverence.

But there is a subtler fear at work. If a machine can think, then perhaps thinking is not so special. If consciousness can emerge from silicon, then perhaps our own consciousness is not the spiritual miracle we have long believed it to be. The hard problem of AI is, at its root, a threat to human exceptionalism.

This is the true source of our anxiety. Not that machines might suffer, but that their suffering—or lack thereof—would force us to reconsider the nature of our own. It is not a question about them. It is a question about us, dressed in technological clothing.`,
      status: "PUBLISHED",
      deskId: deskEssays.id,
      typeId: typeArticle.id,
      readingTime: 12,
      publishedAt: new Date("2026-07-28T00:00:00Z"),
      coverImageId: media1.id,
      authors: {
        create: {
          personId: drMercer.id,
          role: "AUTHOR"
        }
      }
    }
  });

  const babylonArticle = await prisma.content.create({
    data: {
      title: "The Invention of Time: How Babylon Gave Us Seven Days",
      slug: "invention-of-time-babylon",
      summary: "Before the seven-day week, human life followed the moon. The Babylonians did not merely name the days—they structured our perception of reality.",
      body: `Time is the only empire that has conquered every civilization without raising an army.`,
      status: "PUBLISHED",
      deskId: deskEssays.id,
      typeId: typeArticle.id,
      readingTime: 18,
      publishedAt: new Date("2026-07-24T00:00:00Z"),
      coverImageId: media2.id,
      authors: {
        create: {
          personId: profVoss.id,
          role: "AUTHOR"
        }
      }
    }
  });

  console.log("Database seeded with sample prototype data!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
